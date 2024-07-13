import axios from "axios";

let x = 1,
  y = true,
  z = 3;

let promise = axios
  .get("http://localhost:3001/personss")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => console.log("ERROR ", err));
