import { Component, OnInit, Input } from '@angular/core';
import { cardInfo } from '../../model/button';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {

  card:any;

  constructor() {
    this.card = new cardInfo('06','2019','23','23','23');
   }

  ngOnInit(): void {
  }

}
