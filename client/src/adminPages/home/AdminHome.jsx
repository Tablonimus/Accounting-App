import React, { useEffect } from "react";
import NavBarHome from "../../components/Bars/NavBarHome";
import { Card } from "flowbite-react";
import AdminBar from "./AdminBar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getAdminProfile } from "../../redux/actions";
import AdminNav from "./AdminNav";
import Login from "../../neighborPages/login/Login";

export default function AdminHome() {
  const dispatch = useDispatch();
  const id = localStorage.getItem("idA");

  useEffect(() => {
    dispatch(getAdminProfile(id));
  }, [dispatch]);

  const loggedAdmin = useSelector((state) => state.loggedAdmin);

  console.log(loggedAdmin);

  return (
    <div className="w-full h-screen flex flex-col bg-gray-900">
      {loggedAdmin ? (
        <>
          <AdminNav />

          <div>
            <button>
              
            </button>
          </div>

          <div className="fixed bottom-0">
            <AdminBar />
          </div>
        </>
      ) : (
      false
      )}
    </div>
  );
}
