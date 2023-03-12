import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SubNavBar from "../../shared/components/Navigation/SubNavBar";
import RankedStats from "./RankedStats";
import Footer from "../../shared/components/Footer";
import "./SummonerProfile.css";

const SummonerProfile = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  let params = useParams();

  useEffect(() => {
    const getData = () => {
      return fetch(
        `/api/${params.game}/summoner/${params.region}/${params.summonerName}`
      )
        .then((response) => {
          const respData = response.json();
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
  }, [params.region, params.summonerName, params.game]);

  // TODO: use the summonerId from the response to fetch summoner's League data
  return (
    <div className="summoner-profile-container">
      <SubNavBar game={params.game} leaderboardActive={false} />
      <div className="summoner-info-container">
        <h2>{params.summonerName}</h2>
        {isPending && <div>Loading...</div>}
        {data && data.length === 0 && (
          <div>There is no Ranked data for this profile</div>
        )}
        {data && <RankedStats stats={data[0]} />}
      </div>
      <Footer />
    </div>
  );
};

export default SummonerProfile;
