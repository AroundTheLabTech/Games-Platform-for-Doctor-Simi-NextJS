// const BACKEND_BASE_URL = 'https://gametropolis-back-api-214230919331.us-central1.run.app'
const BACKEND_BASE_URL = 'http://localhost:8080'

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

    const response = await fetch(`${BACKEND_BASE_URL}/users/user_game_card/${uid}`, requestOptions);

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

    const response = await fetch(`${BACKEND_BASE_URL}/users/user_information/${uid}`, requestOptions);

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    return null;
  }
};

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

    const response = await fetch(`${BACKEND_BASE_URL}/users/user_profile_picture/${uid}`, requestOptions);

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

    const response = await fetch(`${BACKEND_BASE_URL}/users/profile_pictures/${uid}`, requestOptions);

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    return null;
  }
};