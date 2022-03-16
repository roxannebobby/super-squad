import React from 'react';
import '../components/App.css';
import CharacterList from './CharacterList';

export const App = () => {
	return (
		<div className='well well-large center'>
			<h1>Super Squad Builder</h1>
			<CharacterList />
		</div>
	);
};

export default App;
