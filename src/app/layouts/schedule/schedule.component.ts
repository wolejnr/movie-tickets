import { MoviesService } from './../../core/services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  movie;
  adultTickets = 1;
  adultTicketPrice = 15.03;
  childTickets = 0;
  childTicketPrice = 12.06;
  seniorTickets = 0;
  seniorTicketPrice = 11.53;
  time = '3:00pm';
  selectedSeats = [];

  constructor(private service: MoviesService, private route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe(params => {
      this.movie = service.getMovieData(params.get('title'))[0];
    });
  }

  ngOnInit(): void {
  }

  chooseTime(currTime) {
    this.time = currTime;
    console.log(this.time);
  }

  clickedChair(slug, index){
    const totalTickets = Number(this.adultTickets) + Number(this.childTickets) + Number(this.seniorTickets);
    this.service.reserveChair(slug, index, totalTickets);
    console.log('Total tickets: ' + totalTickets);
    console.log('clicked chair ' + index + ' for ' + slug + ' movie');
    // this.selectedSeats.push(index);
    this.selectedSeats = this.service.selectedChairs(slug);
    console.log('Seats chosen are: ' + this.selectedSeats);
  }

  clickedContinue() {
    this.router.navigate(['movies', this.movie.slug, 'schedule', 'checkout'], {
      queryParams: {
        adultTickets: this.adultTickets,
        childTickets: this.childTickets,
        seniorTickets: this.seniorTickets,
        time: this.time,
        selectedSeats: this.selectedSeats,
        adultTicketPrice: this.adultTicketPrice,
        childTicketPrice: this.childTicketPrice,
        seniorTicketPrice: this.seniorTicketPrice
      }
    });
  }
}
