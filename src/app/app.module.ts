import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  bootstrap: [AppComponent],
  imports: [BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [AppComponent, LoginComponent],
})
export class AppModule {}
