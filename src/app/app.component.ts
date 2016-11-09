import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../providers/dataservice.service';
import { MyTypedItem } from '../shared/mytypeditem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public myItems: MyTypedItem [];

  constructor(private _dataService: DataService) { }''

  ngOnInit() {
      this.getAllItems();
  }

  //...

  private getAllItems(): void {
      this._dataService
          .GetAll()
          .subscribe((data:MyTypedItem[]) => this.myItems = data,
              error => console.log(error),
              () => console.log('Get all Items complete'));
  }

}
