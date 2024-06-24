import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScssVariablesComponent } from './scss-variables/scss-variables.component';
import { ScssNestingComponent } from './scss-nesting/scss-nesting.component';
import { ScssMixinComponent } from './scss-mixin/scss-mixin.component';

@NgModule({
  declarations: [
    AppComponent,
    ScssVariablesComponent,
    ScssNestingComponent,
    ScssMixinComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
