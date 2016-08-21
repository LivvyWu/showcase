import {Component} from '@angular/core';
import {User} from '../models/user';
import {RegisterService} from '../services/register.service';

@Component({
    selector: 'register',
    templateUrl: 'app/components/register.component.html'
})

export class Register { 

	newUser = new User();

	constructor(private registerService: RegisterService){}

	onSubmit() {
		// to do

		this.registerService.sendUser(this.newUser).then(res => {
			//to do
			this.newUser = new User();
		}).catch(error => console.log(error));


	}

}