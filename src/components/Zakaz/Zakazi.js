import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.less";
import DetailZakaz from "../DetailZakaz/DetailZakaz";

axios.defaults.baseURL = 'http://localhost:8080/api/';

const Zakazi = () => {

  const [list, setList] = useState([]);
  const [listDetail, setListDetail] = useState([]);
  const [zakazId, setZakazId] = useState(null);

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

  const getZakazById = async (id) => {
    if (id !== zakazId) {
      try {
        const data = await axios.get(`order/${id}`);
        setZakazId(id);
        setListDetail(data.data);
      } catch (error) {
        console.error(error);
      }
    } else {
      setZakazId(null);
    }
  }

  return (
    <ul className="zakazi">
      {list.map(item => {
        return (
          <div
            key={item.id}
          >
            <li
              className="zakazi__item"
            >
              <div
                className="zakazi__toggle"
                onClick={() => getZakazById(item.id)}
              >
                <div className="zakazi__toggle-icon">
                  +
                  </div>
              </div>
              <div className="zakazi__number">
                {item.docNum}
              </div>
              <div className="zakazi__date">
                {item.docDate}
              </div>
              <div className="zakazi__comment">
                {item.description}
              </div>
            </li>
            {
              zakazId === item.id && <DetailZakaz listDetail={listDetail} />
            }
          </div>
        )
      })}
    </ul>
  );
};

export default Zakazi;