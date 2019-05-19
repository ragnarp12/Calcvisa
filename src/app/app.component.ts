import { Component, OnInit } from '@angular/core';
import { Item } from './models/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  public title: string = 'Calcvisa';

  // List of items
  public items: Item[] = [];

  // itemsCount make user inputs dynamic
  public itemsCount: number = 3;

  public ngOnInit(): void {
    this.setupItems();
  }

  public setupItems(): void {
    for (let i = 0; i < this.itemsCount; i++) {
      const item = new Item(i, '0');
      this.items.push(item);
    }
  }
}
