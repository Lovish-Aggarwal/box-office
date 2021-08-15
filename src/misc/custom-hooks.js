/* eslint-disable no-unused-vars */
import { useReducer, useEffect } from 'react';

function showReducer(prevState, action) {
  switch (action.type) {
    case 'ADD': {
      return [...prevState, action.showId];
    }

    case 'REMOVE': {
      return prevState.filter(showId => showId !== action.showId);
    }

    default:
      return prevState;
  }
}

function usePersistedReducer(reducer, initialState, key) {
  const [state, dispatch] = useReducer(reducer, initialState, inital => {
    const persisted = localStorage.getItem(key);

    return persisted ? JSON.parse(persisted) : inital;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, dispatch];
}

export function useshows(key = 'shows') {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return usePersistedReducer(showReducer, [], key);
}
