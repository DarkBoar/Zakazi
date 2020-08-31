import React, { useState } from "react";
import "./index.less";
import axios from "axios";

const QueryFilter = ({ setList }) => {

  const [value, setValue] = useState("");
  const [timerId, setTimerId] = useState("");


  const textInput = (event) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    const text = event.target.value;
    setValue(text);

    setTimerId(setTimeout(() => fetchFilterZakaz(text), 1000))
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