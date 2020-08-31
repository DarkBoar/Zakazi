import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.less";

axios.defaults.baseURL = 'http://localhost:8080/api/';

const ZakazDetail = ({ listDetail }) => {
  return (
    <div className="zakaz-detail">
      <ul>
        {listDetail.length !== 0 && listDetail.map(item => {
          return (
            <li
              key={item.id}
              className="zakazi__item"
            >
              <div>
                {item.name}
              </div>
              <div className="zakazi__number">
                {`${item.qty} кол-во`}
              </div>
              <div className="zakazi__number">
                {`${item.price} р.`}
              </div>
              <div className="zakazi__number">
                {`${item.sum} р.`}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

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
    try {
      const data = await axios.get(`order/${id}`);
      setZakazId(id);
      setListDetail(data.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
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
                zakazId === item.id && <ZakazDetail listDetail={listDetail} />
              }
            </div>
          )
        })}
      </ul>
    </div>
  );
};

export default Zakazi;