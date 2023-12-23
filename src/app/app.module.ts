import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingRoutingModule } from './app-routing-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
