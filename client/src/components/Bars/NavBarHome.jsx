import React from "react";
import { Navbar, Dropdown, Avatar, Button } from "flowbite-react";
import homeslogo from "../../assets/images/homeslogo.png";
import { Link } from "react-router-dom";

export default function NavBarHome() {
  let loggedUser = false;

  return (
    <Navbar rounded={true} class="sticky top-0 bg-gray-100 h-18 pl-5 py-2">
      <Navbar.Brand href="">
        <img src={homeslogo} className="mr-3 h-6 sm:h-9" alt="" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          B°Lugar Escondido
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {loggedUser === true ? (
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
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
