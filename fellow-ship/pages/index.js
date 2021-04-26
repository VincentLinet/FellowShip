import React from "react";
import Head from "next/head";

import Button from "../src/components/objects/Button";
import HeadBar from "../src/components/layout/HeadBar";
import HeadPicture from "../src/components/layout/HeadPicture";
import CaptainIcon from "../src/components/icons/CaptainIcon";
import SaberIcon from "../src/components/icons/SaberIcon";

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
        <div className="home">
          <HeadPicture />
          <div className="home__presentation">
            <div className="home__presentation__title">
              Find fellows and compose a Tabletop Role Playing Game session
            </div>
            <div className="home__presentation__explanations">
              <div className="home__presentation__member home__presentation__master">
                <CaptainIcon className="home__presentation__member__icon" />
                <p>
                  You can build a world, manage a party of fellows throughout their adventures, like to plot against
                  them and throw to their face your strongest arsenal of omnious creatures ?
                </p>
                <p className="home__presentation__master__highlight">You can take part in our masters ranks.</p>
                <p>
                  As a master, Fellowship gives you the opportunity to make it professional. Find players according to
                  your speciality and fill your weekly planning !
                </p>
                <Button kind="primary">Join as a Master</Button>
              </div>
              <div className="home__presentation__member home__presentation__player">
                <SaberIcon className="home__presentation__member__icon" />
                <p>
                  You want to be the strongest barbarian in the plain, the smartest detective of early modern London, or
                  the most skilled Hextech trooper and don't know a master yet ?
                </p>
                <p className="home__presentation__player__highlight">Enroll amongst our Fellows !</p>
                <p>
                  You will be able to choose a fitting master and exchange with him about what you are expecting as a
                  session, and form a fellowship by mixing your friends and our felows !
                </p>
                <Button kind="secondary">Join as a Fellow</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

App.getInitialProps = async () => {
  return {};
};

export default App;
