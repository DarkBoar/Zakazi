import React, { useState } from "react";
import "./index.less";
import axios from "axios";
import DetailZakaz from "../DetailZakaz/DetailZakaz";

const Zakazi = ({ list }) => {

  const [listDetail, setListDetail] = useState([]);
  const [zakazId, setZakazId] = useState(null);

  const getZakazById = async (id, zakazId) => {
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
      {list.length > 0 && list.map(item => {
        return (
          <div
            key={item.id}
          >
            <li
              className="zakazi__item"
            >
              <div
                className="zakazi__toggle"
                onClick={() => getZakazById(item.id, zakazId)}
              >
                <div className="zakazi__toggle-icon">
                  {zakazId === item.id ? "-" : "+"}
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