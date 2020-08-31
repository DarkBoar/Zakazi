import React, { useState } from "react";
import "./index.less";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8080/api/';

const QueryFilter = ({ setList }) => {

  const [value, setValue] = useState("");

  const textInput = (event) => {
    const text = event.target.value;
    setValue(text);

    let timerId = setTimeout(() => fetchFilterZakaz(text), 1000);
    // clearTimeout(timerId);
  }

  const fetchFilterZakaz = async (filter) => {
    try {
      const { data } = await axios.get("order", { params: { filter } });
      setList(data)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="filter">
      <div className="filter__title">Заказы</div>
      <input
        value={value}
        onChange={(e) => textInput(e)}
      />
    </div>
  );
};

export default QueryFilter;