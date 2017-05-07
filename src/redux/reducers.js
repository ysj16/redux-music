import frame from '../layouts/FrameRedux';
import index from '../views/IndexRedux';
import player from '../views/MusicPlayerRedux';
import musicList from '../views/MusicListRedux';
import undoable, { includeAction } from 'redux-undo';
export default {
	frame:undoable(frame,{
		limit:5
	}),
	index:index,
	player:player,
	musicList:musicList
};
