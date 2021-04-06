import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Hero } from '../../interface/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  term: string = '';

  heroes: Hero[] = [];

  selectedHero: Hero | undefined;

  constructor(private heroService: HeroesService) { }

  ngOnInit(): void {
  }

  search() {
    this.heroService.getSuggest(this.term.trim())
      .subscribe( heroes => this.heroes = heroes);
  }

  getOptionSelected(event: MatAutocompleteSelectedEvent){

    if(!event.option.value){
      this.selectedHero = undefined;
      return;
    }

    const hero: Hero = event.option.value;
    this.term = hero.superhero;
    this.heroService.getHeroById(hero.id!).subscribe(heroRes=> this.selectedHero = heroRes);
  }
}
