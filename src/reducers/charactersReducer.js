import characters_data from '../data/characters_data.json';
// braces required because we didn't export as default
import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions';

import { createCharacter } from './helpers';

function characters(state = characters_data, action) {
	switch (action.type) {
		case ADD_CHARACTER:
			let characters = state.filter((item) => item.id !== action.id);
			return characters;

		case REMOVE_CHARACTER:
			characters = [...state, createCharacter(action.id)];
			return characters;

		default:
			return state;
	}
}

export default characters;
