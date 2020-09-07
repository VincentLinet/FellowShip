import React, { useState } from "react";
import Head from "next/head";

import HeadBar from "../src/components/HeadBar";

import "../styles/design.css";

const App = ({ ...props }) => {
  const [result, setResult] = useState("TOTO");

  return (
    <>
      <Head>
        <title>FellowShip</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="app">
        <HeadBar searchResult={setResult}/>
        <h1>{ result }</h1>
      </div>
    </>
  );
};

App.getInitialProps = async () => {
  return {};
};

export default App;
