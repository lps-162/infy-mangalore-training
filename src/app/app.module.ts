import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmpListComponent } from './employees/emp-list/emp-list.component';
import { EmpDetailsComponent } from './employees/emp-details/emp-details.component';
import { EmpCreateComponent } from './employees/emp-create/emp-create.component';
import { HomeComponent } from './common/home/home.component';
import { AboutComponent } from './common/about/about.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { RouterModule } from "@angular/router";
import { appRouting } from "./app.routing";
import { CardHoverDirective } from './quick/card-hover.directive';
import { AngularizePipe } from './quick/angularize.pipe';
import { ColdCitiesPipe } from './quick/cold-cities.pipe';
import { NotFoundComponent } from './common/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    EmpDetailsComponent,
    EmpCreateComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    CardHoverDirective,
    AngularizePipe,
    ColdCitiesPipe,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
