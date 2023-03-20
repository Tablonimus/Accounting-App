import React, { useEffect, useState } from "react";
import AdminBar from "../adminComponents/AdminBar";
import { Card } from "flowbite-react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAdminProfile,
  getBatch,
  getInvoice,
  getService,
} from "../../redux/actions";
import AdminNav from "../adminComponents/AdminNav";
import Login from "../../neighborPages/login/Login";

export default function AdminHome() {
  const dispatch = useDispatch();
  const id = localStorage.getItem("idA");

  useEffect(() => {
    dispatch(getAdminProfile(id));
    dispatch(getBatch());
    dispatch(getService());
    dispatch(getInvoice());
  }, []);

  // useEffect(() => {

  // }, [dispatch]);

  const loggedAdmin = useSelector((state) => state.loggedAdmin);

  const invoices = useSelector((state) => state.invoice);

  const [deudaTotal, setDeudaTotal] = useState(0);

  const noPagadas = invoices
    ?.filter((i) => i.pagado === false)
    .reduce((a, b) => a + parseFloat(b.total), 0);
  console.log(noPagadas);

  return (
    <div className="w-full h-screen flex flex-col main">
      {loggedAdmin ? (
        <>
          <AdminNav />

          <div></div>

          <div className="fixed bottom-0">
            <AdminBar />
          </div>
        </>
      ) : (
        <div className="bg-gray-100 p-2   flex flex-col justify-center items-center text-center font-bold ">
          <h1>"Permiso denegado. Debes iniciar sesión para ingresar"</h1>
          <a href="/admin/login" className="border-b-2 border-black">
            👉Inicia sesión aquí👈
          </a>
        </div>
      )}
    </div>
  );
}
