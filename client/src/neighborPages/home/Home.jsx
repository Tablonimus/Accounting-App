import React, { useEffect } from "react";
import NavBarHome from "../../components/Bars/NavBarHome";
import { Card, Carousel } from "flowbite-react";
import bg from "../../assets/images/bg1.avif";
import ToolsBar from "../../components/Bars/ToolsBar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../../redux/actions";
export default function Home() {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.loggedUser);
  const navigate = useNavigate();
  const id = localStorage.getItem("id");

  
  useEffect(() => {
    dispatch(getUserProfile(id));
  }, []);

  return (
    <div className=" flex flex-col justify-between bg-gray-900">
      <NavBarHome />

      <div className="my-2 flex justify-center items-center">
        <h1 className="text-white ">Últimos avisos</h1>
      </div>
      <Carousel>
        <img
          src={bg}
          alt="banner"
          className="object-cover h-96 w-96 rounded-lg "
        />
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
      </Carousel>
      <div className=""></div>

      <ToolsBar />
    </div>
  );
}
