import { validateObjectValues } from "../utils/helpers";

export const getGameCard = async (uid) => {
  try {
    if (!uid) {
      throw new Error('UID inválido');
    }

    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(`/api/users/user_game_card/${uid}`, requestOptions);

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    return error.message;
  }
};

export const getUserInformation = async (uid) => {
  try {
    if (!uid) {
      throw new Error('UID inválido');
    }

    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(`/api/users/user_information/${uid}`, requestOptions);

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    return null;
  }
};

export const updateUserInformation = async (uid, data) => {
  try {
    if (!uid) {
      throw new Error('UID inválido');
    }

    if (!data) {
      throw new Error('Data inválida');
    }

    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(`api/users/user_information/${uid}`, requestOptions);

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export const getUserPicture = async (uid) => {
  try {
    if (!uid) {
      throw new Error('UID inválido');
    }

    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(`api/users/user_profile_picture/${uid}`, requestOptions);

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    return null;
  }
};

export const getUserProfilePictures = async (uid) => {
  try {
    if (!uid) {
      throw new Error('UID inválido');
    }

    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(`/api/users/profile_pictures/${uid}`, requestOptions);

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    return null;
  }
};

export const getCompetitionSessions = async (userUid, opponentUid, competitionId) => {
  try {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(`api/competition/competition_plays/${userUid}/${opponentUid}/${competitionId}`, requestOptions);

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    return null;
  }
};

export const getListCompetitionNotification = async (uid) => {
  try {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(`api/competition/competitions/${uid}`, requestOptions);

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    return null;
  }
};

export const getAllCompetition = async (userUid) => {
  try {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(`api/competition/all_competition/${userUid}`, requestOptions);

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    return null;
  }
};

export const postSessionGame = async (gameSession) => {
  try {
    if (!gameSession?.uid) {
      throw new Error('UID inválido');
    }

    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(gameSession),
    };

    console.log(requestOptions);

    const response = await fetch(`api/games/`, requestOptions);

    console.log(response);

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    return error.message;
  }
};

export const getListAvalibleCompetition = async (uid)=> {
  try {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(`/api/competition/active_competitions/${uid}`, requestOptions);

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    return null;
  }
};

export const getCompetitiveStatus = async (userUid, opponentUid, uniqueId) => {
  try {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(`api/competition/competitive_status/${userUid}/${opponentUid}/${uniqueId}`, requestOptions);

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    return null;
  }
};

export const postCreateCompetition = async (newCompetition) => {
  try {
    if (!newCompetition?.sender_email) {
      throw new Error('Email inválido');
    }

    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCompetition),
    };

    const response = await fetch(`api/competition/create`, requestOptions);

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    return error.message;
  }
};

export const putRejectCompetition = async (uid, competitionUid, id) => {
  try {
    if (!uid) {
      throw new Error('UID inválido');
    }
    const response = await fetch(`api/competition/reject/${uid}/${competitionUid}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({}),
    });

    if (!response.ok) {
      throw new Error('Error al rechazar la competicion');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    return null;
  }
};

export const putAcceptCompetition = async (uid, competitionUid, id) => {
  try {
    if (!uid) {
      throw new Error('UID inválido');
    }
    const response = await fetch(`api/competition/accept/${uid}/${competitionUid}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({}),
    });

    if (!response.ok) {
      throw new Error('Error al aceptar la competicion');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    return null;
  }
};

export const putCompetitionSession = async (competitionSession) => {
  try {
    console.log(competitionSession)
    const isValidObject = true /*validateObjectValues(competitionSession);*/

    if (!isValidObject) {
      throw new Error('Objecto no valido');
    }

    const response = await fetch(`api/competition/competition_session`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(competitionSession),
    });

    if (!response.ok) {
      throw new Error('Error al aceptar la competicion');
    }

    console.log(response)

    const result = await response.json();
    console.log(result)
    return result;
  } catch (error) {
    console.error(error.message)
    return null;
  }
};

export const getUserPoints = async (uid) => {
  try {
    if (!uid) {
      throw new Error('UID inválido');
    }

    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(`api/scores/score_user/${uid}`, requestOptions);

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    // Alert.alert('Error', 'No se pudo obtener el puntaje del usuario');
    return null;
  }
};

export const putResetPassword = async (email) => {
  try {
    if (!email) {
      throw new Error('Email inválido');
    }

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    };

    const response = await fetch(`api/users/reset_password/${email}`, requestOptions);

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    return error.message;
  }
};

export const applyNewPassword = async (oobCode, newPassword) => {
  try {
    const response = await fetch(`/api/users/apply_new_password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ oob_code: oobCode, new_password: newPassword }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateUserProfilePicture = async (uid, url) => {
  try {
    const response = await fetch(`api/users/update_profile_picture/${uid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        profile_picture_url: url,
      }),
    });

    if (!response.ok) {
      throw new Error('Error al actualizar la foto de perfil');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};
