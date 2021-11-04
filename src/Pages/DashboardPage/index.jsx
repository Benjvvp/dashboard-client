import React from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import { ServerList } from "../../Components/ServerList/ServerList";
import { getMuteGuilds, getUserDetails } from "../../Utils/api";

export function DashboardPage({ history }) {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [guilds, setGuilds] = React.useState([]);

  React.useEffect(() => {
    getUserDetails()
      .then(({ data }) => {
        setUser(data);
        setLoading(false);
        return getMuteGuilds();
      })
      .then(({ data }) => {
        setGuilds(data);
        console.log(data);
      })
      .catch((err) => {
        window.location.href = "http://localhost:3001/auth/discord/redirect";
        setLoading(false);
      });
  }, []);

  return (
    !loading && (
      <>
        <NavBar user={user} />
        <ServerList guilds={guilds} />
      </>
    )
  );
}
