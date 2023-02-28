import React from "react";
import { useState } from "react";
import NavBarHome from "../Bars/NavBarHome";
import { useSelector, useDispatch } from "react-redux";
import { getBatch, createBatch } from "../../redux/actions";
import CreateBatchModal from "./CreateBatchModal";
import { useEffect } from "react";
import BatchesCell from "./BatchesCell";
import AdminBar from "../AdminView/AdminBar";

export default function Batches() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBatch());
  }, []);

  const batches = useSelector((state) => state.batch);



  return (
    <div className="flex flex-col justify-between h-screen">
      <NavBarHome />
      <div className="lg:grid lg:grid-cols-6 p-3 flex flex-col gap-2 ">
        <div className="flex flex-col">
          <div class="relative mb-5">
            <div class="flex absolute inset-y-0 right-0 items-center pl-3 pt-2 pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              // onChange={(e) => handleInputChange(e)}
              type="text"
              id="input-group-search"
              class="block p-2 mt-2 pl-10 w-40 lg:w-56 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
              placeholder="Buscar lote..."
            />
          </div>
        </div>

        <div className="mt-2">
          <CreateBatchModal />
        </div>
      </div>

      <div className="bg-gray-200 flex flex-col overflow-auto">
        <BatchesCell batches={batches} />
      </div>

      <AdminBar />
    </div>
  );
}
