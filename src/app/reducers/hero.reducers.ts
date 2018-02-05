import {Hero} from '../hero';
import * as heroActions from '../actions/hero.action';

export interface State {
heroes: Hero[];
}

const initilizeState: State = {
    heroes: []
};

export function heroReducer(state = initilizeState, action: heroActions.Actions): State {
    switch (action.type) {
        case heroActions.LOAD_HEROES_SUCCESS: {
            return state = {
                heroes: action.payload
            };
        }
        case heroActions.DELETE_HEROES_SUCCESS: {
            return state = {
                heroes: state.heroes.filter(hero => hero.id !== action.payload)
            };
        }
        default: {
            return state;
        }
    }
}