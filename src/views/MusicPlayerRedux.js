const initialState = {
	status:"pause",
	musicList:[{title:"",src:"",author:"","disc-img":""}],
	curIndex:0
}
const PLAYER_PLAY = "PLAYER_PLAY";
const PLAYER_PAUSE = "PLAYER_PAUSE";
const NEXT_MUSIC = "NEXT_MUSIC";
const PREV_MUSIC = "PREV_MUSIC";
const GET_MUSICLIST = "GET_MUSICLIST";
const GET_MUSICLIST_SUCCESS = "GET_MUSICLIST_SUCCESS";
const GET_MUSICLIST_ERROR = "GET_MUSICLIST_ERROR";
const INIT_PLAYER = "INIT_PLAYER";
function play(){
	return{
		type:PLAYER_PLAY
	}
}
function pause(){
	return{
		type:PLAYER_PAUSE
	}
}
function next(){
	return{
		type:NEXT_MUSIC
	}
}
function prev(){
	return{
		type:PREV_MUSIC
	}
}
function init(){
	return{
		type:INIT_PLAYER
	}
}
function getMusicList(){
	return{
		types:[GET_MUSICLIST,GET_MUSICLIST_SUCCESS,GET_MUSICLIST_ERROR],
		url:"/api/getMusicList.json"
	}
}
export const actions = {
	play,
	pause,
	next,
	prev,
	init,
	getMusicList
}
export default function PlayerReducer(state=initialState,action){
	switch (action.type){
		case PLAYER_PLAY:{
			return{
				...state,
				status:"play"
			}
		}
		case PLAYER_PAUSE:{
			return{
				...state,
				status:"pause"
			}
		}
		case NEXT_MUSIC:{
			return{
				...state,
				curIndex:(state.curIndex+1)%state.musicList.length
			}
		}
		case PREV_MUSIC:{
			return{
				...state,
				curIndex:(state.musicList.length+state.curIndex-1)%state.musicList.length
			}
		}
		case GET_MUSICLIST_SUCCESS:{
			return{
				...state,
				musicList:action.payload
			}
		}
		case INIT_PLAYER:{
			return{
				status:"pause",
				musicList:[{title:"",src:"",author:"","disc-img":""}],
				curIndex:0
			}
		}
		default:{
			return state;
		}
	}
}