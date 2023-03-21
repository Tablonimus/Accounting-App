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
  const array = [1, 2, 2, 3, 3, 3];

  console.log("}LA17171717", loggedUser);

  return (
    <div className="w-full h-screen flex flex-col bg-gray-900 justify-between">
      <NavBarHome />
      <div className="overflow-y overflow-x  lg:h-2/3 bg-gray-100 rounded-lg shadow-lg">
        <BillsCell invoices={loggedUser?.Invoices} />
      </div>

      <ToolsBar />
    </div>
  );
}
