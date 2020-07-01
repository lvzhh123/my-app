import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import * as model from './model/info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  public card: model.CardInfo;
  public list: Array<model.List>;
  name = '选择';
  value = new Date();

  ngOnInit() {
    
  }

  currentDateFormat(date, format: string = 'yyyy-mm'): any {
    return format
      .replace('yyyy', date.getFullYear())
      .replace('mm', date.getMonth() + 1)
  }
}
