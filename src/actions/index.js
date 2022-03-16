// creating const here allows us to refer to the type without quotes
export const ADD_CHARACTER = 'ADD_CHARACTER';

// these functions aren't the actions themselves but instead are 'action creators' that return actions
export function addCharacterById(id) {
	const action = {
		type: ADD_CHARACTER,
		id: id,
	};
	return action;
}
