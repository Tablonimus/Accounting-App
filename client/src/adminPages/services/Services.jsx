import React from "react";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getBatch, createBatch, getService } from "../../redux/actions";
import CreateServiceModal from "./CreateServiceModal";
import { useEffect } from "react";

import ServicesCell from "./ServicesCell";
import AdminNav from "../adminComponents/AdminNav";
import AdminBar from "../adminComponents/AdminBar";

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
      <AdminNav />

      <div className="  p-3 flex flex-col gap-2  overflow-x-auto overflow-y-auto ">
        <div className="flex flex-col gap-2 justify-center items-center bg-gray-300 rounded-lg shadow-lg p-3">
          <div className=" flex flex-row text-center items-center justify-center">
            <h2 className="font-semibold w-96">SERVICIOS ACTIVOS</h2>
            <CreateServiceModal />
          </div>

          <div className="overflow-y-auto w-96 h-96 lg:h-full lg:w-1/2 bg-gray-100 rounded-lg shadow-lg">
            <ServicesCell services={services} />
          </div>
        </div>
      </div>

      <AdminBar />
    </div>
  );
}
