import axios from "axios";
const API_URL = "http://localhost:3000/documents/";

// create document
const createDocument = (title, date, content) => {
  return axios.post(API_URL + "create", {
    title,
    date,
    content,
  });
};

// get just one document
const getOneDocument = (id) => {
  return axios.get(API_URL + id);
};

// get documentlist
const getDocuments = () => {
  return axios.get(API_URL);
};

// update document
// const updateDocument = (subscription) => {
//   console.log("subscription", subscription);
//   let user = JSON.parse(localStorage.getItem("user"));
//   return axios.post(API_URL + user.id, {
//     subscription,
//   });
// };

const AuthService = {
  createDocument,
  getDocuments,
  getOneDocument,
};

export default AuthService;
