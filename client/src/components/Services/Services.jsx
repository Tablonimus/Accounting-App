import React from "react";
import { useState } from "react";
import NavBarHome from "../Bars/NavBarHome";
import { useSelector, useDispatch } from "react-redux";
import { getBatch, createBatch, getService } from "../../redux/actions";
import CreateServiceModal from "./CreateServiceModal";
import { useEffect } from "react";

import AdminBar from "../../adminPages/home/AdminBar";
import ServicesCell from "./ServicesCell";

export default function Services() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getService());
  }, []);

  const services = useSelector((state) => state.service);
  // useEffect(() => {
  //   dispatch(getService());

  // }, [dispatch]);

  return (
    <div className="bg-gray-200 flex flex-col justify-between h-screen">
      <NavBarHome />

      <div className="lg:grid lg:grid-cols-2   p-3 flex flex-col gap-2 ">
        <div className="flex flex-col gap-2 justify-center items-center bg-gray-300 rounded-lg shadow-lg p-3">
          <div className=" grid grid-cols-2 text-center items-center justify-center">
            <h2 className="font-semibold w-96">SERVICIOS ACTIVOS</h2>
            <CreateServiceModal />
          </div>

          <div className="bg-gray-200 flex justify-center overflow-auto shadow-lg rounded-lg">
            <ServicesCell services={services} />
          </div>
        </div>
      </div>

      <AdminBar />
    </div>
  );
}
