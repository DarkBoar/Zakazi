import React, { Component } from "react";
import DetailOrder from "../DetailOrder/DetailOrder";
import { connect } from "react-redux";
import { getZakazById } from "../../store/actions/list";
import "./index.less";

class Orders extends Component {
  render() {
    return (
      <ul className="zakazi">
        {this.props.list.map(item => {
          return (
            <div
              key={item.id}
            >
              <li
                className="zakazi__item"
              >
                <div
                  className="zakazi__toggle"
                  onClick={() => this.props.getZakazById(item.id, this.props.zakazId)}
                >
                  <div className="zakazi__toggle-icon">
                    {this.props.zakazId === item.id ? "-" : "+"}
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
                this.props.zakazId === item.id && <DetailOrder listDetail={this.props.listDetail} />
              }
            </div>
          )
        })}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    listDetail: state.list.listDetail,
    zakazId: state.list.zakazId
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getZakazById: (id, zakazId) => dispatch(getZakazById(id, zakazId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);