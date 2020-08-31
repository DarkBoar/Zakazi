import React from "react";
import Zakazi from "./components/Zakaz/Zakazi";
import QueryFilter from "./components/QueryFilter/QueryFilter";
import "./index.less";

function App() {
  
  return (
    <div className="container">
      <QueryFilter />
      <Zakazi />
    </div>
  );
}

export default App;
