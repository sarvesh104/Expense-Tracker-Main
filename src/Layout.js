import React from "react";
import Header from "./containers/Header";
import Body from "./containers/Body";
import './styles/main.css';

class Layout extends React.Component {
  render() {
    return (
        <div className="container">
          <Header />
          <Body />
        </div>
      );
  }
}

export default Layout;
