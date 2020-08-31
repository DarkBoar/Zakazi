import React, { Component } from "react";
import Orders from "./components/Orders/Orders";
import QueryFilter from "./components/QueryFilter/QueryFilter";
import "./index.less";
import { connect } from "react-redux";
import { getListZakaz } from "./store/actions/list";

class App extends Component {

  componentDidMount() {
    this.props.getListZakaz();
  }

  render() {
    return (
      <div className="container">
        <QueryFilter />
        <Orders list={this.props.data} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.list.data
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getListZakaz: () => dispatch(getListZakaz()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);