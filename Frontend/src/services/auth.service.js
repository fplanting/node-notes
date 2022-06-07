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
const getOneDocument = (title, date, content) => {
  return (
    axios.get(API_URL + "id"),
    {
      title,
      date,
      content,
    }
  );
};

// get documentlist
const getDocuments = (title, date, content) => {
  return (
    axios.get(API_URL),
    {
      title,
      date,
      content,
    }
  );
};

//login

// const login = (email, password) => {
//   console.log(email, password);
//   return axios
//     .post(API_URL + "login", {
//       email,
//       password,
//     })
//     .then((response) => {
//       console.log(response);
//       console.log(typeof response);
//       if (response.data.status === 200) {
//         localStorage.setItem("user", JSON.stringify(response.data.data));
//       }
//       return response.data.data;
//     });
// };

//show logged in user

// const getCurrentUser = () => {
//   let user = JSON.parse(localStorage.getItem("user"));
//   return axios.get(API_URL + user.id);
// };

//update document

// const updateUser = (subscription) => {
//   console.log("subscription", subscription);
//   let user = JSON.parse(localStorage.getItem("user"));
//   return axios.put(API_URL + user.id, {
//     subscription,
//   });
// };

const AuthService = {
  createDocument,
  getDocuments,
  getOneDocument,
};

export default AuthService;
