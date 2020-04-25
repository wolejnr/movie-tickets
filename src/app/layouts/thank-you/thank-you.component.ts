import { MoviesService } from './../../core/services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {

  movie;
  totalTickets;
  time;

  constructor(private service: MoviesService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.movie = service.getMovieData(params.get('title'))[0];
    });
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.totalTickets = params.get('totalTickets');
      this.time = params.get('time');
    });
  }

}
