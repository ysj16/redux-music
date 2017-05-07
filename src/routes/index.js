import React from 'react';
import {Router,Route,IndexRoute} from 'react-router';
import Frame from '../layouts/Frame';
import Index from '../views/Index';
import MusicList from '../views/MusicList';
import MusicPlayer from '../views/MusicPlayer';
import Rank from '../views/Rank';
import Radio from '../views/Radio';
const routes = history => (
	<Router history={history}>
		<Route path="/" component={Frame} >
	      <IndexRoute component={Index} />
	      <Route path="/gedan" component={MusicList} />
	      <Route path="/Radio" component={Radio}/>
	      <Route path="/Rank" component={Rank}/>
		</Route>
		<Route path="/player" component={MusicPlayer}>
		</Route>
	</Router>
);
export default routes;