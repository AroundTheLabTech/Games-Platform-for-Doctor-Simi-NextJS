"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { getGameCard, getUserInformation, getUserProfilePictures } from "@/services/backend";

import { auth } from "../../../lib/firebase";

function formarGameCardNumber(number) {

  if (!number) {
    return null;
  }

  let numberString = number.toString();
  let formattedString = '';

  for (let i = numberString.length; i > 0; i -= 4) {
    const start = Math.max(0, i - 4);
    const segment = numberString.slice(start, i);
    formattedString = segment + (formattedString ? '-' : '') + formattedString;
  }

  return formattedString;
}

export default function UserComponent() {

  const [uid, setUid] = useState();

  const [gameCard, setGameCard] = useState();
  const [profilePictures, setPofilePictures] = useState();
  const [userInformation, setUseInformation] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const unsubscribe = auth.onAuthStateChanged(async (user) => {
        const { uid: userUid } = user;

        setUid(userUid)
      });

      return () => unsubscribe()
    }

    if (!uid) {
      fetchData()
    }
  }, [uid])

  useEffect(() => {
    const fetchData = async () => {
      const response = await getGameCard(uid);

      setGameCard(response)
    }

    if (!gameCard && uid) {
      fetchData()
    }
  }, [gameCard, uid])


  useEffect(() => {
    const fetchData = async () => {
      const response = await getUserInformation(uid);

      setUseInformation(response)
    }

    if (!userInformation && uid) {
      fetchData()
    }
  }, [userInformation, uid])


  useEffect(() => {
    const fetchData = async () => {
      const response = await getUserProfilePictures(uid);

      console.log(response)

      setPofilePictures(response)
    }

    if (!profilePictures && uid) {
      fetchData()
    }
  }, [profilePictures, uid])

  return (
    <main className="main-container">
      <div className="profile-container">
        <div className="container-information-app">
          <div className="card-game">
            {/* Header */}
            <div className="header-card">
              <h3>GAME-CARD</h3>
              <img src="icons/profile-icons/icon-card.svg" alt="" />
            </div>
            {/* Nombre Usuario */}
            <div className="user-info">
              <p>{gameCard?.name}</p>
            </div>

            {/* Numero Tarjeta - Puntaje  */}
            <div className="number-card">
              <h3>
                {gameCard?.card_number && formarGameCardNumber(gameCard.card_number)}
              </h3>
              <div>
                <img src="img/icons/monedaScore.svg" alt="" /> &nbsp;
                <p>{gameCard?.score && gameCard.score.toLocaleString('en-ES')}</p>
              </div>
            </div>
          </div>

          <div className="personality">

            {/* Title */}
            <div className="title-personality">
              <h3>SimiPersonalidad</h3>
            </div>

            <div className="container-personality-information" >
              <div className="container-personality-image">
                <img src={profilePictures?.current_profile_picture_url && profilePictures.current_profile_picture_url} alt="" width={100} />
              </div>
              <div className="container-description-personality" >
                <div className="sub-title-personality">
                  <h3>simiPLayero</h3>
                </div>
                <div className="personality-description-container" >
                  <p>Me encanta la playa, conectar con la naturaleza, soy fanatico de las ideas nuevas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="personal-information" >
          <div className="personal-information-title" >
            <h3>Informacion personal</h3>
          </div>
          <table className="information-table" >
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Ubicacion</th>
                <th>Edad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {
                  userInformation && Object.entries(userInformation).map(([key, value]) => {
                    console.log(`${key}: ${value}`);

                    if (key === 'name' || key === 'email' || key === 'state' || key === 'age') {

                      return (
                        <td key={key} >{value}</td>
                      )
                    } else {
                      return null;
                    }
                  })
                }
              </tr>
            </tbody>
          </table>
        </div>
        <div className="personal-pictures" >
          <div className="pictures-title" >
            <h3>Fotografía</h3>
          </div>

          <div className="pictures-list-container" >
            {
              profilePictures?.list_profile_pictures_avalible && profilePictures?.list_profile_pictures_avalible?.map((picture, index) => {
                return (
                  <div className="picture-container" key={index} >
                    <img src={picture.image_url} alt={picture.title} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>


    </main>
  );
}
