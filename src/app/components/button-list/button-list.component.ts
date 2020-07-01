import { Component, OnInit} from '@angular/core';
import { Botton } from '../../model/button'

@Component({
  selector: 'app-button-list',
  templateUrl: './button-list.component.html',
  styleUrls: ['./button-list.component.scss']
})
export class ButtonListComponent implements OnInit {
  buttonList = [
    new Botton('../../assets/1_07.gif', '收支分析'),
    new Botton('../../assets/1_09.gif', '月度账单'),
    new Botton('../../assets/1_11.gif', '我的账本'),
    new Botton('../../assets/1_13.gif', '查找交易')
  ];

  public ass:any = '222';

  constructor() { 
  }
  

  ngOnInit(): void {
  }

}
