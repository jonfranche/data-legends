import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LeagueSubNavbar from "./LeagueSubNavBar";


const SummonerProfile = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  let params = useParams();

  console.log(`/lol/summoner?region=${params.region}&name=${params.summonerName}`)

  useEffect(() => {
    const getData = () => {
      return fetch(
        `/lol/summoner/${params.region}/${params.summonerName}`)
        .then((response) => {
          const respData = response.json();
          console.log(respData);
          return respData;
        })
        .then((response) => {
          setData(response);
          setIsPending(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    setData(null);
    setIsPending(true);
    setTimeout(() => {
      getData();
    }, 1000);
  }, [params.region, params.summonerName]);

  // TODO: use the summonerId from the response to fetch summoner's League data
  return (
    <div>
      <LeagueSubNavbar />
      <h2>
        Summoner Profile: {params.summonerName} Region: {params.region}
      </h2>
      {isPending && (<div>Loading...</div>)}
      {data && <div>{JSON.stringify(data[0])}</div>}
    </div>
  );
};

export default SummonerProfile;
