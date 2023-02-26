import * as action from "../actions/actionTypes";
import axios from "axios";
import { bindActionCreators } from "redux";

const url = "http://localhost:3001";
//-----------REWARDS FILTER---------------
// export function getRewardCriminals(input) {
//   return async function (dispatch) {
//     try {
//       const nPage = 30;
//       const links = [];
//       for (let i = 1; i <= nPage; i++) {
//         links.push(`https://api.fbi.gov/wanted/v1/list?page=${i}`);
//       }

//       const promisedLinks = links.map(async (link) => await axios.get(link));

//       const dataFBI = await Promise.all(promisedLinks);
//       const criminals = dataFBI.map((criminals) => criminals.data).flat();
//       const payload = criminals.map((criminal) => criminal.items).flat();
//       const payloadReward = payload.filter(
//         (crimi) =>
//           crimi?.reward_text?.length >
//           0 /* && crimi?.subjects?.includes("Kidnappings") */
//       );

//       const getDbCriminals = await axios.get(
//         "https://bounty-hunter-newapp.herokuapp.com/criminal"
//       );
//       const dbCriminals = getDbCriminals.data.reverse();
//       const allCriminals = [dbCriminals, payloadReward];
//       const searched = allCriminals
//         .flat()
//         .filter(
//           (criminal) =>
//             criminal.title?.toLowerCase().includes(input?.toLowerCase()) ||
//             criminal.reward_text
//               ?.toLowerCase()
//               .includes(input?.toLowerCase()) ||
//             criminal.subjects?.includes(input?.toLowerCase())
//         );
//       return dispatch({
//         type: action.GET_REWARD_FBI,
//         payload:
//           input?.length === 0 || searched?.length > 0
//             ? searched
//             : allCriminals.flat(),
//       });
//     } catch (error) {
//       console.log(error, "Error on getAllCriminals");
//     }
//   };
// }

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
//----------POST---------
export function createBatch(payload) {
  return async function (dispatch) {
    try {
      let json = await axios.post(`${url}/batch`, payload);
      dispatch({
        type: action.CREATE_BATCH,
        payload: json.data,
      });
      console.log("JSOMN", json);
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
      console.log("JSOMN", json);
      return alert("Servicio creado correctamente");
    } catch (error) {
      return console.log(error);
    }
  };
}
export function createInvoice(payload) {
  return async function (dispatch) {
    try {
      let json = await axios.post(`${url}/billing/newbill`, payload);
      dispatch({
        type: action.CREATE_INVOICE,
        payload: json.data,
      });
      console.log("JSON", json);
      return alert("Facturado");
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
