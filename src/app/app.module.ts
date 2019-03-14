import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { MatCardModule } from '@angular/material';
import { HomeService } from './modules/home/home.service';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './modules/shared/header/header.component';
import { SnackDetailsComponent } from './modules/snack/snack-details/snack-details.component';
import { SnackDetailsService } from './modules/snack/snack-details/snack-details.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SnackDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule, MatCheckboxModule,
    FlexLayoutModule,

    HttpClientModule
  ],
  providers: [HomeService,SnackDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
