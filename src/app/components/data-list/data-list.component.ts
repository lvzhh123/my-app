import { Component, OnInit , Input} from '@angular/core';
import { ListInfo, ListInfos } from '../../model/button';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {

  list : any;

  constructor() {
    this.list = [
      new ListInfos('今天',
      [new ListInfo('../../assets/1_20.gif','支付宝瑞星咖啡','-¥6.75','零食烟酒'),
      new ListInfo('../../assets/1_20.gif','支付宝瑞星咖啡','-¥6.75','零食烟酒') ]),
      new ListInfos('昨天',
      [new ListInfo('../../assets/1_20.gif','支付宝瑞星咖啡','-¥6.75','零食烟酒'),
      new ListInfo('../../assets/1_20.gif','支付宝瑞星咖啡','-¥6.75','零食烟酒') ])
    ]
   }

  ngOnInit(): void {
  }

}
