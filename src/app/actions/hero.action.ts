import {Action} from '@ngrx/store';
import {Hero} from '../Hero';

export const LOAD_HEROES = 'LOAD_HEROES';
export const LOAD_HEROES_SUCCESS = 'LOAD_HEROES_SUCCESS';
export const DELETE_HEROES = 'DELETE_HEROES';
export const DELETE_HEROES_SUCCESS = 'DELETE_HEROES_SUCCESS';


export class LoadHeroesAction implements Action {

    readonly type = LOAD_HEROES;
    constructor() {}
 }

 export class LoadHeroesSuccessAction implements Action {

    readonly type = LOAD_HEROES_SUCCESS;
    constructor(public payload: Hero[] ) {}

 }

 export class DeleteHeroAction implements Action {

    readonly type = DELETE_HEROES;
    constructor(public payload: number) {}
 }

 export class DeleteHoroScuessfullAction implements Action {

    readonly type = DELETE_HEROES_SUCCESS;
    constructor(public payload: number) {}

 }

 export type Actions = LoadHeroesAction | LoadHeroesSuccessAction
 | DeleteHeroAction | DeleteHoroScuessfullAction
 ;