import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../../redux/actions";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import "./login.css";

export default function AdminLogin() {
  const loggedAdmin = useSelector((state) => state.loggedAdmin);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // if (loggedAdmin) navigate("/admin");

  const [user, setUser] = useState({
    user: "",
    password: "",
  });

  const [error, setError] = useState();

  function handleChange({ target: { id, value } }) {
    setUser({ ...user, [id]: value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      // await login(user.email, user.password);
      if (
        user.user === "" ||
        user.password === ""
      ) {
        alert("Debes completar todos los campos");
      } else {
        await dispatch(loginAdmin(user)).then((response) =>
          navigate(`/admin`)
        );
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div
      id="login"
      className="flex flex-col lg:items-end p-5 justify-center items-center bg-gray-200 h-screen "
    >
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="opacity-90 flex flex-col gap-4 w-8/12 lg:w-1/2 justify-center border bg-gray-100 rounded shadow-lg  p-3"
      >
        <h1>LOGIN DE ADMINISTRADORES</h1>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="mail" value="Usuario" />
          </div>
          <TextInput
            id="user"
            type="text"
            placeholder="Ingrese su usuario aquí"
            required={true}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Contraseña" />
          </div>
          <TextInput
            id="password"
            type="password"
            placeholder="Ingrese su contraseña aquí"
            required={true}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
