import characters_data from '../data/characters_data.json';

export function createCharacter(id) {
	let character = characters_data.find((c) => c.id === id);
	return character;
}
