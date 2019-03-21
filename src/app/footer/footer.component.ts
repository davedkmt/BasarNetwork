import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  twitter = "https://twitter.com/network_basar";
  facebook = "https://www.facebook.com/BasarNetwork/";
  instagram = "https://www.instagram.com/p/BnDczk6HNgt/?igshid=13l6o2nprrxz6&utm_source=fb_www_attr&hl=en";
  email = "mailto:basarnetworkministry@gmail.com";

  constructor() { }

  ngOnInit() {
  }

}
