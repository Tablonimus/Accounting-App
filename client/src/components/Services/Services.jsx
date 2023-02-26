import React from "react";
import { useState } from "react";
import NavBarHome from "../Bars/NavBarHome";
import { useSelector, useDispatch } from "react-redux";
import { getBatch, createBatch, getService } from "../../redux/actions";
import CreateServiceModal from "./CreateServiceModal";
import { useEffect } from "react";

import AdminBar from "../AdminView/AdminBar";
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
      

        <div className="mt-2">
          <CreateServiceModal />
        </div>
      

      <div className="bg-gray-200 flex flex-col overflow-auto">
        <ServicesCell services={services} />
      </div>

      <AdminBar />
    </div>
  );
}
