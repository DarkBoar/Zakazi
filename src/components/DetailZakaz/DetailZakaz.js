import React from 'react';

const DetailZakaz = ({ listDetail }) => {
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
  );
};

export default DetailZakaz;