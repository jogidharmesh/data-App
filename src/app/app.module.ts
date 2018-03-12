import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LandingComponentComponent } from './landing-component/landing-component.component'
import { FilterdataComponent} from './filterdata/filterdata.component';
import { SearchFilterPipePipe } from './filterdata/search-filter-pipe.pipe'



@NgModule({
  declarations: [
    AppComponent,
    LandingComponentComponent,
    FilterdataComponent,
    SearchFilterPipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
