import React, { Component } from "react";
import "./index.less";
import { connect } from "react-redux";
import { getFilterList } from "../../store/actions/list";

class QueryFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      timerId: null
    }
  }

  textInput(event) {
    if (this.state.timerId) {
      clearTimeout(this.state.timerId);
    }
    const text = event.target.value;

    this.setState({
      value: event.target.value,
      timerId: setTimeout(() => this.props.getFilterList(text), 1000)
    })
  }

  render() {
    return (
      <div className="filter">
        <div className="filter__title">Заказы</div>
        <input
          value={this.state.value}
          onChange={(e) => this.textInput(e)}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.list.data
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getFilterList: (filter) => dispatch(getFilterList(filter)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QueryFilter);