import React from "react";
import { Link } from "react-router-dom";
import "./ServerList.css";
export function ServerList({ guilds }) {
  function createUI(guild) {
    if (!guild.in) {
      if (!guild.icon) {
        return (
          <Link to={`dashboard/${guild.id}`}>
            <img
              src="data:image/png;base64,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"
              alt="servericon"
              className="rounded-circle opacity-50 w-75 mx-auto"
            />
          </Link>
        );
      } else {
        return (
          <Link to={`dashboard/${guild.id}`}>
            <img
              src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}
              alt="servericon"
              className="rounded-circle opacity-50 w-75 mx-auto"
            />
          </Link>
        );
      }
    } else {
      if (!guild.icon) {
        return (
          <Link to={`dashboard/${guild.id}`}>
            <img
              src="data:image/png;base64,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"
              alt="servericon"
              className="rounded-circle opacity-50 w-75 mx-auto"
            />
          </Link>
        );
      } else {
        return (
          <Link to={`dashboard/${guild.id}`}>
            <img
              src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}
              alt="servericon"
              className="rounded-circle opacity-50 w-75 mx-auto"
            />
          </Link>
        );
      }
    }
  }

  return (
    <div className="container">
      <h1 className="fw-bold text-center fs-1 mt-5">Server List</h1>
      <div className="row mt-5">
        {guilds.map((guild) => (
          <div className="col rounded-circle" key={guild.id}>
            <div className="d-flex flex-column justify-content-center">
              {createUI(guild)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
