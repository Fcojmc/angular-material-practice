import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interface/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroesService: HeroesService) { 
  }

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe( res => this.heroes = res );
  }


}
