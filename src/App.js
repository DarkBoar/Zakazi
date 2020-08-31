import React, { useState, useEffect } from "react";
import Zakazi from "./components/Zakaz/Zakazi";
import QueryFilter from "./components/QueryFilter/QueryFilter";
import "./index.less";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8080/api/';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getListZakaz();
  }, [])

  const getListZakaz = async () => {
    try {
      const data = await axios.get("order");
      setList(data.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container">
      <QueryFilter
        setList={setList}
      />
      <Zakazi
        list={list}
        setList={setList}
      />
    </div>
  );
}

export default App;
