
import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import * as heroActions from '../actions/hero.action';
import { HeroService } from '../hero.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroEffects {
constructor(
     private actions$: Actions,
     private heroService: HeroService,
){}
    @Effect() loadHeroes$ = this.actions$.ofType(heroActions.LOAD_HEROES)
    .switchMap(() => {
            return this.heroService.getHeroes()
                .map(heroes => new heroActions.LoadHeroesSuccessAction(heroes));
        });

@Effect() deleteHero$ = this.actions$.
        ofType(heroActions.DELETE_HEROES)
        .switchMap((action: heroActions.DeleteHeroAction) => {
            return this.heroService.delete(action.payload)
                .map(hero => new heroActions.DeleteHoroScuessfullAction(hero.id));
        });
}