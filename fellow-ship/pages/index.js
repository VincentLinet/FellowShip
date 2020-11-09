import React from "react";
import Head from "next/head";

import HeadBar from "../src/components/layout/HeadBar";
import HeadPicture from "../src/components/layout/HeadPicture";

import "../styles/design.css";

const App = ({ ...props }) => {
  return (
    <>
      <Head>
        <title>FellowShip</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="app">
        <HeadBar />
        <HeadPicture />
      </div>
    </>
  );
};

App.getInitialProps = async () => {
  return {};
};

export default App;
