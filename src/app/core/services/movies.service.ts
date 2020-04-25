import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  moviesData = [
    {
      title: 'Black Panther',
      slug: 'black-panther',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0747/3829/products/mL1096.jpg?v=1571445340',
      releaseDate: '01/29/2018',
      synopsis: `Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 18th film in the Marvel Cinematic Universe (MCU). The film was directed by Ryan Coogler, who co-wrote the screenplay with Joe Robert Cole, and it stars Chadwick Boseman as T'Challa / Black Panther alongside Michael B. Jordan, Lupita Nyong'o, Danai Gurira, Martin Freeman, Daniel Kaluuya, Letitia Wright, Winston Duke, Angela Bassett, Forest Whitaker, and Andy Serkis. In Black Panther, T'Challa is crowned king of Wakanda following his father's death, but he is challenged by Killmonger (Jordan) who plans to abandon the country's isolationist policies and begin a global revolution.`,
      chairs: [
        'available',
        'available',
        'reserved',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'reserved',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'reserved',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'reserved',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'reserved',
        'available',
        'available',
        'available',
        'available',
        'available',
        'reserved',
        'available',
        'available',
        'available',
        'available',
        'reserved'
      ],
      chairsChosen: []
    },
    {
      title: 'Black Widow',
      slug: 'black-widow',
      imageUrl: 'https://cdn.flickeringmyth.com/wp-content/uploads/2019/08/marvel-black-widow-poster-600x917.jpg',
      releaseDate: '11/20/2020',
      synopsis: `Black Widow is an upcoming American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is intended to be the 24th film in the Marvel Cinematic Universe (MCU). The film was directed by Cate Shortland and written by Eric Pearson from a story by Jac Schaeffer and Ned Benson, and stars Scarlett Johansson as Natasha Romanoff / Black Widow alongside Florence Pugh, David Harbour, O-T Fagbenle, William Hurt, Ray Winstone, and Rachel Weisz. Set after Captain America: Civil War (2016), the film sees Romanoff on the run and forced to confront her past. Development of a Black Widow film began in April 2004 by Lionsgate, with David Hayter attached to write and direct. The project did not move forward and the film rights to the character reverted to Marvel Studios by June 2006. Johansson was cast in the role for several MCU films beginning with Iron Man 2 (2010). Marvel and Johansson expressed interest in a solo film several times over the following years, before Schaeffer and Shortland were hired in 2018. Benson joined in early 2019, with Pearson added later. Filming took place from May to October, in Norway, Budapest, Morocco, Pinewood Studios in England, and in Atlanta and Macon, Georgia. Black Widow is scheduled for release in the United States on November 6, 2020, as the first film in Phase Four of the MCU. Its release was delayed from an original May 2020 date due to the 2019–20 coronavirus pandemic.`,
      chairs: [
        'available',
        'available',
        'reserved',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'reserved',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'reserved',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'reserved',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'reserved',
        'available',
        'available',
        'available',
        'available',
        'available',
        'reserved',
        'available',
        'available',
        'available',
        'available',
        'reserved'
      ],
      chairsChosen: []
    },
    {
      title: 'Mulan',
      slug: 'mulan',
      imageUrl: 'https://mlpnk72yciwc.i.optimole.com/cqhiHLc-KARG7GUi/w:382/h:565/q:90/https://www.bleedingcool.com/wp-content/uploads/2020/03/mulan_ver22_xlg.jpg',
      releaseDate: '03/26/2020',
      synopsis: `Mulan is a 2020 American action drama film directed by Niki Caro, with the screenplay by Rick Jaffa, Amanda Silver, Lauren Hynek, and Elizabeth Martin, produced by Walt Disney Pictures, and distributed by Walt Disney Studios Motion Pictures. The film is based on the Chinese folklore "The Ballad of Mulan" and is a live-action adaptation of Disney's 1998 animated film of the same name. The film stars Liu Yifei in the title role, alongside Donnie Yen, Jason Scott Lee, Yoson An, Gong Li, and Jet Li in supporting roles. Plans for a live-action Mulan remake began in 2010, but the project never came to fruition. In March 2015, a new attempt was announced and Caro was hired to direct in February 2017. Liu was cast in the title role in November 2017, following a casting call of 1,000 actresses, and the rest of the cast joined over the following year. Filming began in August 2018 and lasted through November, taking place in New Zealand and China. Mulan is the first live-action remake from Disney to be given a PG-13 rating by the MPAA. It was scheduled to be released in the United States on March 27, 2020, but was delayed to July 24, 2020 due to the 2019–20 coronavirus pandemic.`,
      chairs: [
        'available',
        'available',
        'reserved',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'reserved',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'reserved',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'reserved',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'reserved',
        'available',
        'available',
        'available',
        'available',
        'available',
        'reserved',
        'available',
        'available',
        'available',
        'available',
        'reserved'
      ],
      chairsChosen: []
    },
    {
      title: 'Like a Boss',
      slug: 'like-a-boss',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0747/3829/products/mL4084_1024x1024.jpg?v=1577740462',
      releaseDate: '01/09/2020',
      synopsis: `Like a Boss is a 2020 American contemporary buddy comedy directed by Miguel Arteta, written by Sam Pitman and Adam Cole-Kelly, and starring Tiffany Haddish, Rose Byrne, and Salma Hayek. Two friends with very different personalities run their own beauty company, Mia&Mel. Mia (Tiffany Haddish) is more practical and inventive, while Mel (Rose Byrne) wants to earn her fortune quickly and live a lavish lifestyle. Things take a turn for the worse when their company runs into debt, forcing them to turn to unscrupulous benefactor Claire Luna (Salma Hayek), head of a major cosmetics empire, who intends to steal the business out from under them. The two must address their differences to save their business, as they are faced with the challenge of 'proving' themselves to Luna even as Luna steals their 'one-night-stand' bag idea and has it marketed through one of her other companies, as well as forcing them to fire their old workers. Mia and Mel briefly 'split up' through their different approaches to Luna's offer, but they reconcile when their friends help them face how they need each other. Faced with the possible loss of their business, Mia and Mel approach Shay (Lisa Kudrow), Luna's former business partner, to start a new company, Proud Cosmetics, marketing their new 'Ride or Die' product, make-up intended to be used by best friends together to face their nights out. With this loophole, Mia and Mel are able to produce and market 'Ride or Die' under the 'Proud' banner while Luna takes ownership of Mia&Mel while still required to pay them 49% of all subsequent earnings.`,
      chairs: [
        'available',
        'available',
        'reserved',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'reserved',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'reserved',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'reserved',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'reserved',
        'available',
        'available',
        'available',
        'available',
        'available',
        'reserved',
        'available',
        'available',
        'available',
        'available',
        'reserved'
      ],
      chairsChosen: []
    }
  ];

  constructor() { }

  getAllMovies() {
    return this.moviesData;
  }

  getMovieData(slug){
    return this.moviesData.filter((movie) => {
      return movie.slug === slug;
    });
  }

  reserveChair(slug, index, totalTickets) {
    console.log(`${slug}: ${index}`);
    const movieId = this.moviesData.findIndex(movie => {
      return movie.slug === slug;
    });
    let totalSelected = this.moviesData[movieId].chairs.filter(x => x === 'selected').length;
    if (totalSelected < totalTickets) {
      if (this.moviesData[movieId].chairs[index] === 'reserved') {
        alert('Chair Reserved! Please Choose Another One.');
      } else {
        this.moviesData[movieId].chairs[index] = (this.moviesData[movieId].chairs[index] === 'available') ? 'selected' : 'available';
        this.moviesData[movieId].chairsChosen.push(index);
        totalSelected = this.moviesData[movieId].chairs.filter(x => x === 'selected').length;
      }
    } else {
      alert(`You have ${totalSelected} tickets. You can't reserve any more seats. Order more tickets.`);
    }
    console.log(this.moviesData);
  }

  selectedChairs(slug) {
    const movieId = this.moviesData.findIndex(movie => {
      return movie.slug === slug;
    });
    const seats = this.moviesData[movieId].chairsChosen;
    return seats;
  }
}
