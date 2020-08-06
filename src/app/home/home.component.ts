import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  extra_mile = '../assets/images/extra-mile-237x300.png';
  be_agile = '../assets/images/Be-agile-237x300.png';
  Frontiers = '../assets/images/push-frontiers-of-innovation-237x300_robo.jpg';
  keep_learning = '../assets/images/keep-learning-237x300.png';
  solve_for_society = '../assets/images/solve-for-society-237x300_new-237x300.png';

  constructor() { }

  ngOnInit(): void {
  }

}
