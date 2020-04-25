import { MoviesService } from './../../core/services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movieData;

  constructor(service: MoviesService, private route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe(params => {
      this.movieData = service.getMovieData(params.get('title'))[0];
    });
  }

  ngOnInit(): void {
  }

  clickedTicketsBtn(slug){
    console.log('clicked tickets btn');
    this.router.navigate(['movies', slug, 'schedule']);
  }
}
