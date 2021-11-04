import React, { useEffect, useState } from "react";
import "./index.css";
import { NavBar } from "../../Components/NavBar/NavBar";
import { getBotStats } from "../../Utils/api";

export function LandingPage(props) {
  const [botStats, setBotStats] = useState({});
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    getBotStats().then((stats) => {
      setBotStats(stats.data);
      setLoading(false);
    });
  });

  return (
    !loading && (
      <>
        <NavBar />
        <div className="container main-section ms-5">
          <div className="row d-flex row-cols-2 align-items-start">
            <div className="col pt-5 text-welcome">
              <h1 className="main-title pb-2">
                It's time to use Hatsume on your Server
              </h1>
              <p className="main-description pb-2">
                Hatsume is a bot that will make you laugh all day long and has a
                wide variety of commands that will create life on your server.
                This bot is available in English and Spanish!
              </p>
              <div className="mt-4 fw-bold">
                <a
                  href="https://discord.com/api/oauth2/authorize?client_id=874827585417248779&permissions=8&scope=bot"
                  className="main_button pink-button ms-0"
                >
                  Add to Discord
                </a>
                <a href="/dashboard" className="main_button gray-button">
                  Dashboard
                </a>
              </div>
            </div>
            <div className="col image-welcome">
              <img
                src="/img/screen1.png"
                className="img-cool d-bloc ms-auto"
                alt=""
              />
            </div>
          </div>
        </div>
        <img src="/wave.svg" alt="" className="wave" />
        <div className="container mt-7 pt-5 mb-7">
          <div className="row justify-content-center pb-5 reveal skill-container">
            <div className="col">
              <h1 className="titleSkills">Channel Tools</h1>
              <p className="descSkills">
                Channel tools is a command which offers you 3 options to add to
                your channel. Rename, Slow Mode, Delete Channel. This helps you
                to quickly edit the channel without the need to go into the
                options.
              </p>
            </div>
            <div className="col w-50">
              <img
                src="/img/screen2channeltools.png"
                alt=""
                className="d-bloc ms-auto imageSKills"
              />
            </div>
          </div>

          <div className="row justify-content-center pt-5 reveal skill-container">
            <div className="col w-50">
              <img
                src="/img/screen2play.png"
                alt=""
                className="d-bloc me-auto imageSKills"
              />
            </div>
            <div className="col">
              <h1 className="titleSkills">Music Commands</h1>
              <p className="descSkills">
                Hatsume has a complete category of music which will help you
                enhance your day or be comfortable in your home.
              </p>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="text-center">
            <p className="footerT">© Hatsume 2021</p>
            <div className="d-flex flex-row justify-content-center justify-content-evenly">
              <p className="footerD">Channels: {botStats.channels}</p>
              <p className="footerD">Users: {botStats.users}</p>
              <p className="footerD">Servers: {botStats.guilds}</p>
            </div>
          </div>
        </div>
      </>
    )
  );
}
