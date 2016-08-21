import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import {HomeComponent} from './components/home.component'
import {NavBar} from './components/nav-bar.component'




@Component({
    selector: 'my-app',
    directives: [HomeComponent, NavBar],
    template: `
    	<nav-bar></nav-bar>
    	<router-outlet></router-outlet>
    `
})

export class AppComponent { }
