import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import "./login.css"

export default function Login() {
  const loggedUser = useSelector((state) => state.loggedUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    mail: "",
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
      if (user.mail === "" || user.password === "") {
        alert("Must fill all inputs");
      } else {
        dispatch(login(user)).then((response) => console.log(response));
        toast("Logging to the site");

        setTimeout(() => navigate("/home"), [3000]);
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
        <div>
          <div className="mb-2 block">
            <Label htmlFor="mail" value="Tu email" />
          </div>
          <TextInput
            id="numero_lote"
            type="text"
            placeholder="Letra y numero... Ej: A01"
            required={true}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput
            id="password"
            type="password"
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
