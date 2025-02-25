import React, { useEffect, useState } from "react";
import {
  putRejectCompetition,
  putAcceptCompetition,
  getCompetitionSessions,
} from "../../services/backend";

import Image from "next/image";

const CompetitionCard = ({
  competition,
  notifications = false,
  ejectFunction,
  other = false,
  uid
}) => {

  const [competitionPlaysScore, setCompetitionPlaysScore] = useState(0);
  const [opponentCompetitionPlaysScore, setOpponentCompetitionPlaysScore] =
    useState(0);

  async function handleReject() {
    await putRejectCompetition(uid, competition.UID, competition.id);
    ejectFunction();
  }

  async function handleApprove() {
    await putAcceptCompetition(uid, competition.UID, competition.id);
    ejectFunction();
  }

  function getCompetitionSessionScore(competitionSession) {
    return competitionSession.reduce((acc, plays) => acc + plays.score, 0);
  }

  useEffect(() => {
    async function fetchData() {
      const competitionPlays = await getCompetitionSessions(
        uid,
        competition.UID,
        competition.id
      );

      if (competitionPlays?.user_plays_competition?.length) {
        setCompetitionPlaysScore(
          getCompetitionSessionScore(competitionPlays.user_plays_competition)
        );
      } else {
        setCompetitionPlaysScore(0);
      }

      if (competitionPlays?.opponent_plays_competition?.length) {
        setOpponentCompetitionPlaysScore(
          getCompetitionSessionScore(competitionPlays.opponent_plays_competition)
        );
      } else {
        setOpponentCompetitionPlaysScore(0);
      }
    }

    if (!competitionPlaysScore || !opponentCompetitionPlaysScore) {
      fetchData();
    }
  }, [competition.UID, competition.id, uid]);

  function styleStatusValidate(status, result) {
    const statusUpper = status?.toUpperCase();
    const resultUpper = result?.toUpperCase();

    if (statusUpper === "ESPERA") return "statusWait";
    if (statusUpper === "ACEPTADO") return "statusAccepted";
    if (statusUpper === "RECHAZADO") return "statusAccepted";
    if (statusUpper === "COMPLETADO") {
      if (resultUpper === "EMPATE") return "statusDraw";
      if (resultUpper === "GANADO") return "statusWon";
      if (resultUpper === "PERDIDO") return "statusLost";
    }
    return "statusDefault";
  }

  return (
    <div className="container">
      <div className="informationContainer">
        <img
          className="profilePicture"
          src={competition.profile_picture}
          alt="Profile"
          width={40}
          height={40}
        />
        <div className="userCompetition">
          <span className="username">
            {competition.name.length > 5
              ? `${competition.name.substring(0, 5)}...`
              : competition.name}
          </span>
          <div className="competitionPointsContainer">
            <span className="competitionPoints">
              {opponentCompetitionPlaysScore}
            </span>
            <Image src="icons/card-icons/competition.svg" width={20} height={20} />
            <span className="competitionPoints">
              {competitionPlaysScore}
            </span>
          </div>
          <span className={styleStatusValidate(competition.reto_status, competition.resultado)}>
            {competition.reto_status.toUpperCase() === "COMPLETADO"
              ? competition.resultado.toUpperCase()
              : competition.reto_status.toUpperCase() === "ACEPTADO"
              ? "EN CURSO"
              : competition.reto_status.toUpperCase()}
          </span>
        </div>
      </div>
      <div className="baseline"></div>
    </div>
  );
};

export default CompetitionCard;
