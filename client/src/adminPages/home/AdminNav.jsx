import React, { useEffect } from "react";
import { Navbar, Dropdown, Avatar, Button } from "flowbite-react";
import homeslogo from "../../assets/images/homeslogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile, logoutAdmin } from "../../redux/actions";

export default function AdminNav() {
  const navigate = useNavigate();
  const loggedAdmin = useSelector((state) => state.loggedAdmin);

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
        {loggedAdmin ? (
          <Dropdown
            arrowIcon={true}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png"
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block truncate text-sm font-medium">
                Administrador
              </span>
              <span className="block text-sm">{loggedAdmin.mail}</span>
            </Dropdown.Header>
            {/* <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item> */}
            <Dropdown.Divider />
            <Dropdown.Item onClick={logoutAdmin()}>Cerrar sesión</Dropdown.Item>
          </Dropdown>
        ) : (
        "LAALALLALALA"
        )}
      </div>

      {/* <Navbar.Collapse>
        <Navbar.Link href="/navbars" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse> */}
    </Navbar>
  );
}
