const initialState = {
	songSheet:{
		loading:true,
		error:false,
		data:[]
	}
}
const GET_SONGSHEET = "GET_SONGSHEET";
const GET_SONGSHEET_SUCCESS = "GET_SONGSHEET_SUCCESS";
const GET_SONGSHEET_ERROR = "GET_SONGSHEET_ERROR";
// actionCreator
function getSongSheet(){
	return{
		types:[GET_SONGSHEET,GET_SONGSHEET_SUCCESS,GET_SONGSHEET_ERROR],
		url:"/api/getSongSheets2.json"
	}
}
const actions = {
	songSheet:{getSongSheet},
}

//Reducer
function ListReducer(state=initialState,action){
	switch(action.type){
		case GET_SONGSHEET:{
			return{
				...state,
				songSheet:{
					loading:true,
					error:false
				}
			}
		}
		case GET_SONGSHEET_SUCCESS:{
			return{
				...state,
				songSheet:{
					loading:false,
					error:false,
					data:action.payload
				}
			}
		}
		default:{
			return state
		}

	}
}
export{ListReducer as default,actions as actions}