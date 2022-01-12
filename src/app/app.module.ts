import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TopMenuModule } from './top-menu/top-menu.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { HomeComponent } from './home/home.component';
import { NgxMatomoTrackerModule } from '@ngx-matomo/tracker';
import { NgxMatomoRouterModule } from '@ngx-matomo/router';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TopMenuModule,
    BrowserAnimationsModule,
    MatGridListModule,
    NgxMatomoTrackerModule.forRoot({ trackerUrl: 'https://yurizhukov.matomo.cloud', siteId: '1' }),
    NgxMatomoRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
