import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { Store } from '@ngrx/store';
import * as heroActions from '../actions/hero.action';
import {AppState} from '../app.state';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];
  companies$: Observable<Hero[]>;

  constructor(private heroService: HeroService,
  private store: Store<AppState>) { }

  ngOnInit() {
    this.getHeroes();
    this.companies$ = this.store.select(state => state.heroes.heroes);
    this.companies$.subscribe(heroes => this.heroes = heroes);
  }
  getHeroes(): void {
    // this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    this.store.dispatch(new heroActions.LoadHeroesAction);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({name} as Hero)
    .subscribe(hero => {
    this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void {
  //  this.heroes = this.heroes.filter( h => h !== hero);
  //   this.heroService.delete(hero).subscribe();
    this.store.dispatch(new heroActions.DeleteHeroAction(hero.id));
  }
}
