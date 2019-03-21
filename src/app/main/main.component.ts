import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  users: object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getVideos().subscribe(data => {
      this.users = data;
      console.log(this.users);
     })
  }

}
