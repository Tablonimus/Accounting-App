import React, { useEffect } from "react";
import NavBarHome from "../../components/Bars/NavBarHome";
import { Card } from "flowbite-react";
import plaza1 from "../../assets/images/plaza1.jpg";
import ToolsBar from "../../components/Bars/ToolsBar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../../redux/actions";
export default function Home() {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.loggedUser);
  const navigate = useNavigate();
  const id = localStorage.getItem("id")

  if (!loggedUser) navigate("/login");
  useEffect(() => {
    dispatch(getUserProfile(id));
  }, []);

  return (
    <div className="w-full h-screen flex flex-col bg-gray-900">
      <div>
        <NavBarHome />
      </div>
      <div className="flex flex-row">
        <div className="grid grid-cols-2 ">
          <div className="max-w-sm m-2  ">
            <Card imgSrc="https://www.olavarria.gov.ar/wp-content/uploads/2017/07/Plaza-B%C2%B0Los-Robles.jpg">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Actividades union vecinal
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
               Click Aqui para conocer el itinerario

              </p>
            </Card>
            <Card imgSrc="https://www.olavarria.gov.ar/wp-content/uploads/2017/07/Plaza-B%C2%B0Los-Robles.jpg">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Actividades union vecinal
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
               Click Aqui para conocer el itinerario

              </p>
            </Card>
            <Card imgSrc="https://www.olavarria.gov.ar/wp-content/uploads/2017/07/Plaza-B%C2%B0Los-Robles.jpg">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Actividades union vecinal
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
               Click Aqui para conocer el itinerario

              </p>
            </Card>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0">
        <ToolsBar />
      </div>
    </div>
  );
}
