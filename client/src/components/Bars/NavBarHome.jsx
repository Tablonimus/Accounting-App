import React, { useEffect } from "react";
import { Navbar, Dropdown, Avatar, Button } from "flowbite-react";
import homeslogo from "../../assets/images/homeslogo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile, logout } from "../../redux/actions";

export default function NavBarHome() {

  const loggedUser = useSelector((state) => state.loggedUser);


  return (
    <Navbar
      rounded={true}
      className="z-30 sticky top-0 bg-gray-100 h-18 w-full pl-5 py-2"
    >
      <Navbar.Brand href="">
        <img src={homeslogo} className="mr-3 h-6 sm:h-9" alt="" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          B°Lugar Escondido
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {loggedUser ? (
          <Dropdown
            arrowIcon={true}
            inline={true}
            label={
              <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center ring ring-green-300">
                <span className="text-black text-5xl font-semibold ">
                  {loggedUser?.titular ? loggedUser.titular[0] : false}
                </span>
              </div>
              // <Avatar
              //   alt="User settings"
              //   img="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png"
              //   rounded={true}
              // />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{loggedUser.titular}</span>
              <span className="block truncate text-sm font-medium">
                {loggedUser.mail}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Perfil</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={logout()}>Cerrar sesión</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/login">
            <button className="border-2 rounded-lg p-2 hover:bg-gray-200 font-bold">
              {" "}
              Iniciar Sesion
            </button>
          </Link>
        )}
      </div>

      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
