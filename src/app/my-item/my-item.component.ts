import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../providers/dataservice.service';
import { MyTypedItem } from '../../shared/mytypeditem';

@Component({
    selector: 'my-item-component',
    templateUrl: './my-item.component.html',
    //inputs: ['artist']
})

export class MyItemComponent {
    @Input() artist;
/*
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
    }*/
}
