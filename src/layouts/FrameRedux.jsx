const initialState = {
	barWidth:0,
	barLeft:0
}
const CHANGE_NAVBAR = "CHANGE_NAVBAR";
function changeNavBar(barWidth,barLeft){
	return {
		type:CHANGE_NAVBAR,
		payload:{
			barWidth:barWidth,
			barLeft:barLeft
		}
	}
}
function undo(){
	return{
		type: "@@redux-undo/UNDO"
	}
}
export const actions = {
	changeNavBar,
	undo
}
export default function frameReducer(state=initialState,action){
	switch(action.type){
		case CHANGE_NAVBAR:{
			return{
				...state,
				barWidth:action.payload.barWidth,
				barLeft:action.payload.barLeft
			}
		}
		default:
			return state
	}
}