import { logEvent, serverTimestamp } from "firebase/analytics";
import { analytics } from "../../lib/firebase";

export function loginEvent(uid, email) {
  if (typeof window !== 'undefined' && analytics) {
    try {
      logEvent(analytics, 'login', {
        uid: uid,
        email: email,
        last_login: serverTimestamp(),
      });
    } catch (error) {
      console.warn('Firebase Analytics is not available', error);
    }
  }
}

export function registerEvent(uid, email) {
  if (typeof window !== 'undefined' && analytics) {
    try {
      logEvent(analytics, 'sign_up', {
        uid: uid,
        email: email,
        last_login: serverTimestamp(),
      });
    } catch (error) {
      console.warn('Firebase Analytics is not available', error);
    }
  }
}

export function lastGamePlayedEvent(uid, gameId, gameName) {
  if (typeof window !== 'undefined' && analytics) {
    try {
      logEvent(analytics, 'last_game_played', {
        uid: uid,
        game_id: gameId,
        game_name: gameName,
        last_played: serverTimestamp(),
      });
    } catch (error) {
      console.warn('Firebase Analytics is not available', error);
    }
  }
}
