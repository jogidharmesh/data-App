import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LandingComponentComponent } from './landing-component/landing-component.component'
import { FilterdataComponent} from './filterdata/filterdata.component'
import { SearchPipe } from'./filterdata/search.pipe'


@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    LandingComponentComponent,
    FilterdataComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
