import {
  Component,
  Input,
  HostBinding,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.less'],
  host: {
    '[class.box]': 'true',
    '[class.color-blue]': 'true'
  }
})
export class UserInputComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() public item: Item;
  @ViewChild('userInput') public userInput: ElementRef;

  public userInput$: any;
  private previousValue: string;
  private NUM_REG: RegExp = /^-?[0-9]+$/; // Signed integer
  private debounceTimeMs: 300;

  public ngOnInit(): void {
    this.previousValue = this.item.value;
  }

  public ngAfterViewInit(): void {
    // Listen for input changes and wait 300 ms
    this.userInput$ = fromEvent(this.userInput.nativeElement, 'keyup').pipe(
      debounceTime(this.debounceTimeMs)
    );
    this.userInput$.subscribe(event => {
      this.checkValidate(event);
    });
  }

  public ngOnDestroy(): void {
    // Clean up and unsubscribe
    this.userInput$.unsubscribe();
  }

  public checkValidate(e: KeyboardEvent): void {
    const targetValue = (e.target as HTMLInputElement).value;
    const isNumber = new RegExp(this.NUM_REG).test(targetValue);
    const isEmpty = targetValue === '';
    const isFirstOnly = targetValue[0] === '-' && targetValue.length === 1;

    if (isNumber || isFirstOnly || isEmpty) {
      this.previousValue = targetValue;
      return;
    } else {
      e.preventDefault();
      this.item.value = this.previousValue;
    }
  }
}
