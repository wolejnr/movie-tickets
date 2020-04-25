import { MoviesService } from './../../core/services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  movieData;

  adultTickets;
  adultTicketPrice;
  childTickets;
  childTicketPrice;
  seniorTickets;
  seniorTicketPrice;
  time;
  seats;
  taxRate = 0.15;
  tax;
  totalTickets;

  constructor(private service: MoviesService, private route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe(params => {
      this.movieData = service.getMovieData(params.get('title'))[0];
    });
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.adultTickets = params.get('adultTickets');
      this.childTickets = params.get('childTickets');
      this.seniorTickets = params.get('seniorTickets');
      this.adultTicketPrice = params.get('adultTicketPrice');
      this.childTicketPrice = params.get('childTicketPrice');
      this.seniorTicketPrice = params.get('seniorTicketPrice');
      this.time = params.get('time');
      this.seats = params.getAll('selectedSeats');
    });
  }

  checkOut() {
    this.totalTickets = Number(this.adultTickets) + Number(this.childTickets) + Number(this.seniorTickets);
    this.router.navigate(['movies', this.movieData.slug, 'schedule', 'checkout', 'thank-you'], {
      queryParams: {
        totalTickets: this.totalTickets,
        time: this.time
      }
    });
  }
}
