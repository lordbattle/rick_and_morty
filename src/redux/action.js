import { ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER } from "./action-type";

export function addFavorites(character) {
  return {
    type: ADD_FAVORITES,
    payload: character,
  };
}

export function deleteFavorites(id) {
  return {
    type: DELETE_FAVORITES,
    payload: id,
  };
}

export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}

export function orderCards(id) {
  return {
    type: ORDER,
    payload: id,
  };
}
