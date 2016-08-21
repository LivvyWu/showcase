import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing }        from './app.routing';
import { HttpModule }     from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { HomeComponent } from './components/home.component';
import { Register } from './components/register.component';

import { RegisterService } from './services/register.service';

@NgModule({
  imports: [ BrowserModule, routing, HttpModule, FormsModule],
  declarations: [ AppComponent, HomeComponent, Register ],
  providers: [RegisterService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
