import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createInvoice,
  createLightInvoice,
  getBatch,
  getInvoice,
  getService,
} from "../../redux/actions";

import { useEffect } from "react";

import AdminNav from "../adminComponents/AdminNav";
import AdminBar from "../adminComponents/AdminBar";
import SearchBill from "./SearchBill";

export default function Billing() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInvoice());
    dispatch(getBatch());
    dispatch(getService());
    //  dispatch(getAll());
  }, [dispatch]);

  const batches = useSelector((state) => state.batch);
  const services = useSelector((state) => state.service);
  const invoices = useSelector((state) => state.invoice);
  const [editConsumptionCalc, setEditConsumptionCalc] = useState([]);
  const [consumption, setConsumption] = useState([]);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  const [checkService, setCheckService] = useState("");
  function handleService(e) {
    setCheckService(e.target.id);
  }

  let filter = [];

  for (let i = 0; i < batches?.length; i++) {
    if (checkService === "Luz" && batches[i].luz !== false);

    filter.push(batches[i]);
    if (checkService === "Internet" && batches[i].internet !== false)
      filter.push(batches[i]);
    if (
      checkService === "Gastos Comunes" &&
      batches[i].gastos_comunes !== false
    )
      filter.push(batches[i]);
    if (
      !checkService ||
      checkService !== "Internet" ||
      checkService !== "Luz" ||
      checkService !== "Gastos Comunes"
    ) {
      filter.push(batches[i]);
    }
  }

  useEffect(() => {
    setList(filter);
  }, [isCheck, isCheckAll]);

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map((li) => li.numero_lote));

    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  //-----------LIGHT METER INVOICE-----

  function handleLightInvocie(e) {
    setConsumption({
      ...consumption,
      [e.target.id]: { medidor: e.target.value, numero_lote: e.target.id },
    });

    setEditConsumptionCalc({
      ...editConsumptionCalc,
      [e.target.id]: e.target.value - e.target.name,
    });
  }

  //-----------------------------------
  function setBilling() {
    let sources = {
      service: checkService,
      batches: isCheck,
    };
    let lightSources = {
      service: checkService,
      batches: isCheck,
      lightMeter: consumption,
      calc: editConsumptionCalc,
    };

    alert("Se crearan facturas");
    if (checkService === "Luz") {
      dispatch(createLightInvoice(lightSources));
    } else {
      dispatch(createInvoice(sources));
    }
  }

  console.log(isCheck);
  console.log(filter);
  return (
    <div className="flex flex-col bg-gray-200 h-full justify-between main">
      <AdminNav />

      <div className="flex flex-col p-3 flex flex-col gap-3">
        <SearchBill invoices={invoices} />
        <div className="   p-3 flex flex-col  items-center  rounded-lg bg-gray-300  bg-opacity-50 shadow-lg ">
          <h2 className="m-2 font-semibold text-2xl">FACTURACION EN CADENA</h2>
          <div className="flex flex-col  lg:w-11/12 gap-4">
            <div className="bg-gray-100 p-3 rounded-lg shadow-xl ">
              <h3 className="border-b border-black text-xl mb-2">
                Servicio a facturar:
              </h3>
              <form>
                {services?.length > 0
                  ? services?.map((service) => (
                      <div key={service.id}>
                        <div className="flex flex-row gap-1 items-center">
                          <input
                            type="radio"
                            id={service.nombre}
                            name="service"
                            onClick={handleService}
                          />
                          <label htmlFor={service.nombre}>
                            {service.nombre}
                          </label>
                        </div>
                      </div>
                    ))
                  : false}
              </form>
            </div>

            <div className="bg-gray-100 p-3 rounded-lg shadow-xl  ">
              <h3 className="border-b border-black text-xl mb-2">
                Lotes disponibles para facturación:
              </h3>
              {/* <BillingCell      /> */}
              <form action="/admin/billing" className="">
                <div className="overflow-y-auto overflow-x-auto h-56 ">
                  <div className="flex flex-row gap-1 items-center">
                    <input
                      type="checkbox"
                      name="selectAll"
                      id="selectAll"
                      onChange={handleSelectAll}
                      checked={isCheckAll}
                    />
                    <label htmlFor="selectAll">Seleccionar todos</label>
                  </div>
                  {filter?.length > 0 && checkService !== "Luz"
                    ? filter?.map((batch) => (
                        <div key={batch.id}>
                          <div className="flex flex-row gap-1 items-center border-b border-gray-300">
                            <input
                              type="checkbox"
                              id={batch.numero_lote}
                              name={batch.titular}
                              onChange={handleClick}
                              checked={isCheck.includes(batch.numero_lote)}
                            />
                            <label htmlFor={batch.numero_lote}>
                              {batch.numero_lote} - {batch.titular}
                            </label>
                          </div>
                        </div>
                      ))
                    : filter?.length > 0 && checkService === "Luz"
                    ? filter.map((batch) => (
                        <div key={batch.id}>
                          <div className="flex flex-row gap-1 items-center border-b border-gray-300">
                            <table className="border">
                              <thead className="border">
                                <tr>
                                  <th className="border">Seleccionar</th>
                                  <th className="border">N° lote y titular</th>
                                  <th className="border">Medición anterior</th>
                                  <th className="border">Medición del mes</th>
                                  <th className="border">Consumo calculado</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="border">
                                    <input
                                      type="checkbox"
                                      id={batch.numero_lote}
                                      name={
                                        batch.medidor_luz[
                                          batch.medidor_luz.length - 1
                                        ]
                                      }
                                      onChange={handleClick}
                                      checked={isCheck.includes(
                                        batch.numero_lote
                                      )}
                                    />
                                  </td>
                                  <td className="border">
                                    <label htmlFor={batch.numero_lote}>
                                      {batch.numero_lote} - {batch.titular}
                                    </label>
                                  </td>
                                  <td className="border">
                                    <label htmlFor={batch.numero_lote}>
                                      {
                                        batch.medidor_luz[
                                          batch.medidor_luz.length - 1
                                        ].split("//")[1]
                                      }
                                    </label>
                                  </td>
                                  <td className="border">
                                    <input
                                      key={batch.id}
                                      type="text"
                                      name={
                                        batch.medidor_luz[
                                          batch.medidor_luz.length - 1
                                        ].split("//")[1]
                                      }
                                      id={batch.numero_lote}
                                      className="text-sm w-18  h-5"
                                      onChange={(e) => handleLightInvocie(e)}
                                    />
                                  </td>
                                  <td className="border">
                                    <label htmlFor={batch.numero_lote}>
                                      {
                                        Object.entries(editConsumptionCalc)
                                          .filter(
                                            (ele) =>
                                              ele[0] === batch.numero_lote
                                          )
                                          .flat()[1]
                                      }
                                    </label>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      ))
                    : false}
                </div>
                <button
                  className="w-24 h-14 m-3 rounded-lg  bg-red-500 hover:bg-red-600 font-bold text-white shadow-lg border-slate-500 border-black"
                  onClick={setBilling}
                >
                  Facturar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <AdminBar />
    </div>
  );
}
