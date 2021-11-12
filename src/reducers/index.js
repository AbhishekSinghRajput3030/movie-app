import {ADD_MOVIES} from '../actions';

const initialMoviesState={
    list:[],
    favourites:[]
}  
export default function movies(state = initialMoviesState, action){
    if(action.type===ADD_MOVIES){
        //since our current state is object,we ned to return new object we cant modify same object
        return {
            ...state,
            list:action.movies
        }
    }
    return state;
}