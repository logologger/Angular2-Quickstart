import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
  <h1>Hello {{name}}</h1>
  <p><strong>Email </strong> : {{email}}</p>
  <p><strong>Address </strong>: {{address.city}} {{address.state}} {{address.street}}</p>
  `,
})

export class UserComponent  { 
	name:string;
	email:string;
	address:address;

	constructor(){
		this.name='John Doe';
		this.email='john@email.com';
		this.address = {

			street:'11/399, Vikas Nagar',
			city:'Lucknow',
			state:'Uttar Pradesh'
		}
	}
}

interface address{
	
	street:string;
	city:string;
	state:string;
}
