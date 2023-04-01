import React, { useEffect } from "react";
import { Navbar, Dropdown, Avatar, Button } from "flowbite-react";
import logo from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile, logout } from "../../redux/actions";

export default function NavBarHome() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedUser = useSelector((state) => state.loggedUser);
  const avatar = loggedUser?.numero_lote ? loggedUser.numero_lote : "?";
  async function handleLogout(e) {
    e.preventDefault();
    dispatch(logout()).then(navigate("/login"));
  }
  return (
    <Navbar rounded={true} class="bg-white bg-opacity-40 py-2 px-2 w-screen">
      <Navbar.Brand href="">
        <img src={logo} className="mr-3 h-16" alt="" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={true}
          inline={true}
          label={
            <div className="bg-green-300 w-12 h-12 rounded-full flex items-center justify-center ring ring-slate-300">
              <span className="text-white text-xl font-bold ">{avatar}</span>
            </div>
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">{loggedUser?.titular}</span>
            <span className="block text-sm">{loggedUser?.numero_lote}</span>
            <span className="block truncate text-sm font-medium">
              {loggedUser?.mail}
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Perfil</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={(e) => handleLogout(e)}>
            Cerrar sesión
          </Dropdown.Item>
        </Dropdown>
      </div>

      {/*  <Navbar.Collapse>
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
