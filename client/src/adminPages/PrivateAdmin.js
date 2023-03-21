import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateAdmin = () => {
  const tokenn = localStorage.getItem("tokenA");

  const id = localStorage.getItem("idA");

  let auth = { token: tokenn ? true : false };

  let idd = { id: id ? true : false };

  const patternId =
    /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(
      id
    );

  const pattern =
    /^([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_\-\+\/=]*)/gi.test(
      tokenn
    );

  console.log(id);

  console.log(patternId);

  return auth.token && pattern && idd.id && patternId ? (
    <Outlet />
  ) : (
    <Navigate to="/adminlogin" />
  );
};

export default PrivateAdmin;
