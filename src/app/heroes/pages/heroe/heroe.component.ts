import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Hero } from '../../interface/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  hero!: Hero;

  constructor( private activatedRoute: ActivatedRoute,
               private heroService: HeroesService ) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.heroService.getHeroById(id))
    )
    .subscribe( hero => this.hero = hero);

   

  }

}
