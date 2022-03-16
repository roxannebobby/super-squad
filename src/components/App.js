import React from 'react';
import CharacterList from './CharacterList';
import HeroList from './HeroList';
import '../styles/index.css';
import SquadStats from './SquadStats';

export const App = () => {
	return (
		<div className='App'>
			<h1>Super Squad Builder</h1>
			<div className='col-md-4'>
				<CharacterList />
			</div>
			<div className='col-md-4'>
				<HeroList />
			</div>
			<div className='col-md-4'>
				<SquadStats />
			</div>
		</div>
	);
};

export default App;
