import {
  Component,
  Input,
  OnInit,
  HostBinding,
  ViewChild,
  ViewContainerRef,
  ElementRef
} from '@angular/core';
import { Method } from 'src/app/models/method.model';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.less'],
  host: {
    '[class.box]': 'true',
    '[class.color-red]': 'true'
  }
})
export class ResultComponent implements OnInit {
  // user input items list
  @Input() public items: Item[];

  // Selected mathematical method
  public selectedMethod: Method;

  // Available methods for calculation.
  public methods: Method[] = [
    {
      id: 'sum',
      text: 'Sum'
    },
    {
      id: 'multiply',
      text: 'Multiply'
    },
    // {
    //   id: 'division',
    //   text: 'Divide'
    // }
  ];

  /**
   * Getter method which returns the result of
   * calculation on a array (Item[]).
   * Using getter makes sure when user changes inputs the
   * results are instantly calculated.
   */
  public get result(): number {
    let totalValue: number = 0;
    // Extract all values to simple array.
    const itemsValue: number[] = this.items.map(item =>
      parseInt(item.value, 10)
    );

    if (itemsValue.length > 0) {
      totalValue = itemsValue.reduce((total, itemValue) => {
        return this.callFunction(this.selectedMethod.id, total, itemValue);
      });
    }

    return totalValue;
  }

  public ngOnInit(): void {
    // Select the first method as default when initialized.
    this.selectedMethod = this.methods[0];
  }

  /**
   * Executes function based in method name
   * @param methodName name of the method to call
   * @param total total value input to calling function
   * @param value current value input to calling function
   */
  private callFunction(
    methodName: string,
    total: number,
    value: number
  ): number {
    // this[methodName] means that it runs whatever
    // method that has the same name as the value of the methodName.
    return this[methodName](total, value);
  }

  // Here should the calculation methods be

  private sum(x: number, y: number): number {
    return x + y;
  }

  private multiply(x: number, y: number): number {
    return x * y;
  }

  // private division(x: number, y: number): number {
  //   return x / y;
  // }
}
