import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserProfile, login } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import "./login.css";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    numero_lote: "",
    password: "",
  });
  const [error, setError] = useState();

  function handleChange({ target: { id, value } }) {
    setUser({ ...user, [id]: value });
  }
  async function handleSubmit(e) {
    setError("");
    try {
      // await login(user.enumero_lote, user.password);
      if (user.numero_lote === "" || user.password === "") {
        alert("Debes completar todos los campos");
      } else {
        
        await dispatch(login(user))
          .then((id) => dispatch(getUserProfile(id)))
          .then((id) => navigate(`/${id}`));
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
            <Label htmlFor="numero_lote" value="Tu enumero_lote" />
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
        <div className="flex items-center gap-2"></div>
        <Button /* type="submit" */ onClick={(e) => handleSubmit(e)}>
          Ingresar
        </Button>
      </form>
    </div>
  );
}
