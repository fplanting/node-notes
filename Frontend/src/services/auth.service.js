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

//update document
const updateDocument = (id, title, date, content) => {
  return axios.post(API_URL + id, {
    title,
    date,
    content,
  });
};

const AuthService = {
  createDocument,
  getDocuments,
  getOneDocument,
  updateDocument,
};

export default AuthService;
