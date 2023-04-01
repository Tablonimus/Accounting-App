import React, { useEffect } from "react";
import NavBarHome from "../../components/Bars/NavBarHome";
import ToolsBar from "../../components/Bars/ToolsBar";
import { Card } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import BillsCell from "./BillsCell";
import { getUserProfile } from "../../redux/actions";

export default function NeighborBills() {
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(getUserProfile(id));
  //   }, [dispatch]);

  const loggedUser = useSelector((state) => state.loggedUser);

  const invoicesUnpaid = loggedUser?.Invoices.filter(
    (invoice) => invoice.pagado === false
  );
  const totalUnpaid = invoicesUnpaid
    ? invoicesUnpaid
        .map((invoice) => invoice.total)
        .reduce((acc, cur) => parseFloat(acc) + parseFloat(cur), 0)
    : 0;
  console.log("}LA17171717", invoicesUnpaid);

  return (
    <div className="w-full h-screen flex flex-col bg-gray-900 justify-between">
      <NavBarHome />
      <div className="overflow-y overflow-x text-center p-3 bg-gray-100 rounded-lg shadow-lg">
        {invoicesUnpaid?.length === 1 ? (
          <h1 className="text-red-500 text-2xl">
            {`Tenés ${invoicesUnpaid?.length} comprobante sin abonar por un total de 
                $${totalUnpaid}`}
          </h1>
        ) : invoicesUnpaid?.length > 1 ? (
          <h1 className=" text-red-500 text-2xl">
            {`Tenés ${invoicesUnpaid?.length} comprobantes sin abonar por un total de 
                $${totalUnpaid}`}
          </h1>
        ) : (
          <h1 className=" text-red-500 text-2xl">
            {`Tus cuentas están al día 👌🏼👍🏼`}
          </h1>
        )}
      </div>
      <div className="overflow-y overflow-x  lg:h-2/3 bg-gray-100 rounded-lg shadow-lg">
        <BillsCell invoices={loggedUser?.Invoices} />
      </div>

      <ToolsBar />
    </div>
  );
}
