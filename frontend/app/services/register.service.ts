import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {User} from "../models/user";

@Injectable()
export class RegisterService {

	constructor(private http: Http) {}

	sendUser(user: User): Promise<User>  {

		let url = "https://localhost:8090/user/register";
		let headers = new Headers({"Content-Type": "application/json"});

		return this.http
             .post(url, JSON.stringify(user), {headers: headers})
             .toPromise()
             .then(res => res.json().data)
             .catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
	    console.error('An error occurred', error);
	    return Promise.reject(error.message || error);
	  }



}

