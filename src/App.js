import React, { Component } from "react";
import Zakazi from "./components/Zakaz/Zakazi";
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
        <Zakazi list={this.props.data} />
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

// function App() {

//   const [list, setList] = useState([]);

//   useEffect(() => {
//     getListZakaz();
//   }, [])

//   const getListZakaz = async () => {
//     try {
//       const data = await axios.get("order");
//       setList(data.data);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   return (
//     <div className="container">
//       <QueryFilter
//         setList={setList}
//       />
//       <Zakazi
//         list={list}
//         setList={setList}
//       />
//     </div>
//   );
// }

// export default App;
