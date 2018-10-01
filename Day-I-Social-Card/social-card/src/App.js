import React from "react";
import "./App.css";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import CardContainer from "./components/CardComponents/CardContainer";
import Footer from "./components/FooterComponents/Footer";

const App = () => {
  const state = {
    text: "testing",
    boolean: true,
    number: 123
  };
  return (
    <div className="app">
      <div>
        <HeaderContainer
          text={state.text}
          boolean={state.boolean}
          number={state.number}
        />
      </div>
      <div>
        <CardContainer />
      </div>
    </div>
  );
};

export default App;
