const initialState = {
	carousel:{
		data:[]
	},
	songSheet:{
		loading:true,
		error:false,
		data:[]
	},
	hotSinger:{
		loading:true,
		error:false,
		data:[]
	}
}
const GET_SLIDERS = "GET_SLIDERS";
const GET_SLIDERS_SUCCESS = "GET_SLIDERS_SUCCESS";
const GET_SLIDERS_FAIL = "GET_SLIDERS_FAIL";
const GET_SONGSHEET = "GET_SONGSHEET";
const GET_SONGSHEET_SUCCESS = "GET_SONGSHEET_SUCCESS";
const GET_SONGSHEET_ERROR = "GET_SONGSHEET_ERROR";
const GET_HOTSINGER = "GET_HOTSINGER";
const GET_HOTSINGER_SUCCESS = "GET_HOTSINGER_SUCCESS";
const GET_HOTSINGER_ERROR = "GET_HOTSINGER_ERROR";
// actionCreator
function getSlider(){
	return{
		types:[GET_SLIDERS,GET_SLIDERS_SUCCESS,GET_SLIDERS_FAIL],
		url:"/api/getSliderItem.json"
	}
}
function getSongSheet(){
	return{
		types:[GET_SONGSHEET,GET_SONGSHEET_SUCCESS,GET_SONGSHEET_ERROR],
		url:"/api/getSongSheets.json"
	}
}
function getHotSinger(){
	return{
		types:[GET_HOTSINGER,GET_HOTSINGER_SUCCESS,GET_HOTSINGER_ERROR],
		url:"/api/getHotSinger.json"
	}

}
const actions = {
	carousel:{getSlider},
	songSheet:{getSongSheet},
	hotSinger:{getHotSinger}
}

//Reducer
function IndexReducer(state=initialState,action){
	switch(action.type){
		case GET_SLIDERS_SUCCESS:{
			return{
				...state,
				carousel:{
					data:action.payload
				}
			}
		}
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
		case GET_HOTSINGER:{
			return{
				...state,
				hotSinger:{
					loading:true,
					error:false
				}
			}
		}
		case GET_HOTSINGER_SUCCESS:{
			return{
				...state,
				hotSinger:{
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
export{IndexReducer as default,actions as actions}