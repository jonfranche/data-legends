import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const apiKey = require("../apiKeys.json").riot;

const SummonerProfile = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  let params = useParams();

  useEffect(() => {
    const getData = () => {
      return fetch(
        `https://${params.region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${params.summonerName}?api_key=${apiKey}`
      )
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

  return (
    <div>
      <h2>
        Summoner Profile: {params.summonerName} Region: {params.region}
      </h2>
      {isPending && (<div>Loading...</div>)}
      {data && <h3>{data.summonerLevel}</h3>}
    </div>
  );
};

export default SummonerProfile;
