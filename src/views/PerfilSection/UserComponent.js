"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { getGameCard, getUserInformation, getUserProfilePictures, updateUserInformation, updateUserProfilePicture } from "@/services/backend";

import Image from 'next/image';

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

export default function UserComponent(props) {

  const [uid, setUid] = useState();

  const showToaster = (message, type) => {
    window.addToast(message, type);
  }

  const [gameCard, setGameCard] = useState();
  const [profilePictures, setPofilePictures] = useState();
  const [userInformation, setUseInformation] = useState();

  const [edit, setEdit] = useState(false);

  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [state, setState] = useState();

  function handleEdit() {
    setEdit(!edit);
  }

  function handleCancel() {
    setEdit(false);
  }

  async function handleSave() {
    if (!uid) {
      return;
    }
    if (!name || !age || !state) {
      return;
    }

    const data = {
      name,
      age,
      ubication: state
    }

    const response = await updateUserInformation(uid, data);

    if (response.message) {
      const updatedData = {
        ...userInformation,
        name: data.name,
        email: userInformation.email,
        state: data.ubication,
        age: data.age,
      };

      if (updatedData.ubication) {
        delete updatedData.ubication;
      }

      showToaster('Información actualizada', 'success');

      setUseInformation(updatedData);

    }

    setEdit(false);
  }

  async function handleUpdateProfile() {
    if (!uid) {
      return;
    }

    const response = await updateUserProfilePicture(uid, profilePictures.current_profile_picture_url);

    if (response?.message) {
      const updatedData = {
        ...profilePictures,
        current_profile_picture_url: profilePictures.current_profile_picture_url
      };

      showToaster('Foto de perfil actualizada', 'success');

      setPofilePictures(updatedData);

      props.updateUserInformation();
    }
  }

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

      if (response) {
        if (response.name) {
          setName(response.name);
        }
        if (response.age) {
          setAge(response.age);
        }
        if (response.state) {
          setState(response.state);
        }
      }

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

          <div className="personality" style={{display: "none"}}>

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
            {
              !edit ?
                <div className="edit-button" >
                  <button onClick={handleEdit} >
                    <Image src="img/icons/edit.svg" alt="Editar" width={20} height={20} />
                  </button>
                </div> :
                <div className="save-and-cancel-buttons" >
                  <button onClick={handleCancel} >
                    <Image src="img/icons/cancel.svg" alt="Guardar" width={20} height={20} />
                  </button>
                  <button onClick={handleSave} >
                    <Image src="img/icons/save.svg" alt="Guardar" width={20} height={20} />
                  </button>
                </div>
            }
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
                    const isFocused = key === 'name' && edit;

                    if (key === 'name' || key === 'email' || key === 'state' || key === 'age') {

                      return (
                        <td key={key} >
                          {edit && key !== 'email' ? <input autoFocus={isFocused} type="text" value={
                            key === 'name' ? name : key === 'state' ? state : key === 'age' ? age : value
                          } onChange={(e) => {
                            if (key === 'name') {
                              setName(e.target.value)
                            } else if (key === 'state') {
                              setState(e.target.value)
                            } else if (key === 'age') {
                              setAge(e.target.value)
                            }
                          }} /> : value}
                        </td>
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
                    <img className={picture.image_url === profilePictures.current_profile_picture_url ? "img-selected" : ''} src={picture.image_url} alt={picture.title} onClick={() => {
                      setPofilePictures({
                        ...profilePictures,
                        current_profile_picture_url: picture.image_url
                      })
                    }} />
                  </div>
                )
              })
            }
          </div>
          <div className="update-button" >
            <button onClick={handleUpdateProfile} >
              Actualizar
            </button>
          </div>
        </div>
      </div>


    </main>
  );
}
