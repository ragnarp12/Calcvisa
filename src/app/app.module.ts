import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { UserInputComponent } from './component/user-input/user-input.component';
import { ResultComponent } from './component/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
