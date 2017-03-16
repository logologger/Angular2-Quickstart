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
	name = 'Rajat Singh Bhadauria';
	email ='rajatsbhadauria@gmail.com' ;
	address = {
		street:'11/399, Vikas Nagar',
		city:'Lucknow',
		state:'Uttar Pradesh'
	}
}
