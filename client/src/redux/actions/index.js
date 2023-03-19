import * as action from "../actions/actionTypes";
import axios from "axios";
import { bindActionCreators } from "redux";
import { setAuthToken } from "../../components/BrowserHistory/setAuthToken";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:3001";

//logout
export function logout() {
  return async function (dispatch) {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("id");

      return dispatch({
        type: action.LOGOUT,
      });
    } catch (error) {
      window.location.reload(true);
      console.log(error);
    }
  };
}
//logout ADMIN
export function logoutAdmin() {
  return async function (dispatch) {
    try {
      localStorage.removeItem("tokenA");
      localStorage.removeItem("idA");
     
      return dispatch({
        type: action.LOGOUT,
      });
    } catch (error) {
      window.location.reload(true);
      console.log(error);
    }
  };
}

//----------Login----------------
export function login(payload) {
  return async function (dispatch) {
    try {
      console.log("payload", payload);
      await axios.post(`${url}/batch/login`, payload).then((response) => {
        const token = response.data.data.token;
        const id = response.data.id.id;

        localStorage.setItem("token", token);
        localStorage.setItem("id", id);
        setAuthToken(token);
      });
      return dispatch({
        type: action.LOGIN,
        payload,
      });
    } catch (error) {
      window.location.reload(true);
      alert("Mail o contraseña incorrectos");
    }
  };
}
//----------LoginADMIN----------------
export function loginAdmin(payload) {
  return async function (dispatch) {
    try {
      const pet = await axios
        .post(`${url}/admin/login`, payload)
        .then((response) => {
          const token = response.data.data.token;
          const id = response.data.id.id;
          //         const user = response.data.user.user;
          // console.log("USER DEL RESPONSE",user);
          localStorage.setItem("tokenA", token);
          localStorage.setItem("idA", id);

          setAuthToken(token);
          dispatch({
            type: action.LOGIN_ADMIN,
            payload,
          });
          return { token, id };
        });
      return pet;
    } catch (error) {
      window.location.reload(true);
      alert("Mail o contraseña incorrectos");
    }
  };
}

//-----------Get ADMIN Profile-----
export function getAdminProfile(id) {
  return async function (dispatch) {
    try {
      let json = await axios.get(`${url}/admin/${id}`);
      return dispatch({
        type: action.GET_ADMIN_PROFILE,
        payload: { id: json.data.id, user: json.data.user },
      });
    } catch (error) {
      console.log(error);
    }
  };
}
//-----------Get User Profile-----
export function getUserProfile(id) {
  return async function (dispatch) {
    try {
      let json = await axios.get(`${url}/batch/${id}`);

      return dispatch({
        type: action.GET_USER_PROFILE,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

//----------GET---------
export function getBatch() {
  return async function (dispatch) {
    try {
      let json = await axios.get(`${url}/batch`);

      dispatch({
        type: action.GET_BATCH,
        payload: json.data,
      });
    } catch (error) {
      return `Server Error, try again later: ${error}`;
    }
  };
}
export function getService() {
  return async function (dispatch) {
    try {
      let json = await axios.get(`${url}/service`);
      dispatch({
        type: action.GET_SERVICE,
        payload: json.data,
      });
    } catch (error) {
      return `Server Error, try again later: ${error}`;
    }
  };
}

export function getInvoice() {
  return async function (dispatch) {
    try {
      let json = await axios.get(`${url}/billing`);
      dispatch({
        type: action.GET_INVOICE,
        payload: json.data,
      });
    } catch (error) {
      return `Server Error, try again later: ${error}`;
    }
  };
}
//----------POST---------
export function createBatch(payload) {
  return async function (dispatch) {
    try {
      let json = await axios.post(`${url}/batch`, payload);
      dispatch({
        type: action.CREATE_BATCH,
        payload: json.data,
      });

      return alert("Lote creado correctamente");
    } catch (error) {
      return console.log(error);
    }
  };
}
export function createService(payload) {
  return async function (dispatch) {
    try {
      let json = await axios.post(`${url}/service`, payload);
      dispatch({
        type: action.CREATE_SERVICE,
        payload: json.data,
      });

      return alert("Servicio creado correctamente");
    } catch (error) {
      return console.log(error);
    }
  };
}
export function createInvoice(payload) {
  return async function (dispatch) {
    console.log("payloadCREATEINVOICE", payload);
    try {
      let json = await axios.post(`${url}/billing/newbill`, payload);
      dispatch({
        type: action.CREATE_INVOICE,
        payload: json.data,
      });

      return alert("Facturado");
    } catch (error) {
      return console.log(error);
    }
  };
}
export function createLightInvoice(payload) {
  return async function (dispatch) {
    try {
      let json = await axios.post(`${url}/billingLight/newbill`, payload);
      dispatch({
        type: action.CREATE_LIGHT_INVOICE,
        payload: json.data,
      });
      console.log("JSON", json);
      return alert("Facturado");
    } catch (error) {
      return console.log(error);
    }
  };
}

//-------PATCH----------------

export function patchService(payload) {
  return async function (dispatch) {
    try {
      let json = await axios.patch(`${url}/service`, payload);
      dispatch({
        type: action.EDIT_SERVICE,
        payload: json.data,
      });

      return alert("Servicios editados exitosamente");
    } catch (error) {
      return console.log(error);
    }
  };
}

//------------GET DETAIL---------
// export function getDetail(title) {
//   return async (dispatch) => {
//     return await axios
//       .get(`https://bounty-hunter-newapp.herokuapp.com/criminal/${title}`)
//       .then((json) =>
//         dispatch({ type: action.DETAIL_CRIMINAL, payload: json.data })
//       )
//       .catch((error) => console.log(error));
//   };
// }
