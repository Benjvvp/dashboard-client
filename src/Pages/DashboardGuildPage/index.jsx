import React from "react";
import { Link } from "react-router-dom";
import {
  getGuildChannels,
  getUserDetails,
  getGuildInformation,
} from "../../Utils/api";
import "./index.css";
export function DashboardGuildPage({ history, match }) {
  const login = () =>
    (window.location.href = "http://localhost:3001/auth/discord/redirect");
  const logout = () =>
    (window.location.href = "http://localhost:3001/auth/logout");

  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [guildInformation, setGuildInformation] = React.useState({});
  const [guildChannels, setGuildChannels] = React.useState([]);
  React.useEffect(() => {
    getGuildInformation(match.params.id).then(({ data }) => {
      setGuildInformation(data);

      getGuildChannels(match.params.id).then(({ data }) => {
        setGuildChannels(data);

        getUserDetails()
          .then(({ data }) => {
            setUser(data);
            setLoading(false);
          })
          .catch((err) => {
            history.push("/dashboard");
          });
      });
    });
  }, []);
  const dashboardSections = [
    { name: "Set Prefix", link: `dashboard/${guildInformation.id}/setPrefix` },
    { name: "Set Lang", link: `dashboard/${guildInformation.id}/setLang` },
    {
      name: "Channel Tools",
      link: `dashboard/${guildInformation.id}/channelTools`,
    },
    { name: "Auto Role", link: `dashboard/${guildInformation.id}/autoRole` },
    { name: "Send Embed", link: `dashboard/${guildInformation.id}/sendEmbed` },
  ];
  return (
    !loading && (
      <>
        <div className="nav-left">
          <div className="nav-left-content">
            <div className="nav-left-top p-3">
              <img
                src="/img/hatsume.png"
                alt=""
                width="50"
                height="50"
                className="d-inline-block align-text-top rounded-circle"
              />
              <h3 className="server-name">{guildInformation.name}</h3>
            </div>
            <div>
              {dashboardSections.map((command) => (
                <Link to={command.link} className='mx-2'>
                  <div className="commandBox">
                    <p>{command.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="body-content">
          <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
            <div className="container-fluid">
              <div className="ms-auto">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item ms-4 me-2">
                    <a className="nav-link navanimation" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <button className="logout-button nav-link" onClick={logout}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="card-guild-info d-flex flex-row justify-content-evenly">
            <div className="card-guild">
              <p className="fs-4 fw-bold py-4 px-5">
                Members: {guildInformation.approximate_member_count}
              </p>
            </div>
            <div className="card-guild">
              <p className="fs-4 fw-bold py-4 px-5">
                Channels: {guildChannels.length}
              </p>
            </div>
            <div className="card-guild">
              <p className="fs-4 fw-bold py-4 px-5">
                Roles: {guildInformation.roles.length}
              </p>
            </div>
          </div>
          <div className="container mt-5">
            <h1 className="fs-1 fw-bold text-left pt-5">
              Start-Up Configuration
            </h1>
            <p className="color-gray fs-5 pt-4 fw-medium">
              In order to start configuring the bot correctly, first of all you
              are asked to configure the{" "}
              <a
                className="linkGrayText"
                href={`dashboard/${guildInformation.id}/setLang`}
              >
                bot's language.
              </a>{" "}
              <br /> For now the dashboard has few utilities but little by
              little more and more utilities will be added. <br />
              <br />
              One of the best things about dashbord is the possibility to send a
              fully customized{" "}
              <a
                className="linkGrayText"
                href={`dashboard/${guildInformation.id}/sendEmbed`}
              >
                Embed
              </a>{" "}
              to your server, such as an advertisement or just play around with
              it. Well, that's the main guide, the rest is up to you to explore,
              good luck.
            </p>
          </div>
        </div>
        <div className="footerGuild right-0">
          <div className="text-center">
            <p className="footerT fs-6">© Hatsume 2021</p>
          </div>
        </div>
      </>
    )
  );
}
