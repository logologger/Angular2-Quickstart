import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
  <h1>{{name}}</h1>
  <p><strong>Email </strong> : {{email}}</p>
  <p><strong>Address </strong>: {{address.city}} {{address.state}} {{address.street}}</p>
  <button (click)="toggleHobbies()">{{showHobbies ? "Hide Hobbies" : "Show hobbies"}}</button>
  <div *ngIf="showHobbies">
  <h3>Hobbies</h3>

  <ul>
  	<li *ngFor="let hobby of hobbies;let i=index">
  		{{ hobby }} <button (click)="deleteHobby(i)">X</button>
  	</li>
  </ul>
  <form (submit)="addHobby(hobby.value)">
  	<label> Add Hobby : </label><br/>
  	<input type="text" #hobby /><br />
  </form>


  </div>
  <hr />
  <h3>Edit User </h3>
  <form>
  	<label>Name : </label>
  	<input type="text" name="name" [(ngModel)]="name" /><br/>
  	<label>Email : </label>
  	<input type="text" name="email" [(ngModel)]="email" /><br/>
  	<label>Street : </label>
  	<input type="text" name="street" [(ngModel)]="address.street" />
  	<br/>
  	<label>City : </label>
  	<input type="text" name="city" [(ngModel)]="address.city" />
  	<br/>
  	<label>State : </label>
  	<input type="text" name="state" [(ngModel)]="address.state" />
  	<br/>
  </form>
  `,
})

export class UserComponent  { 
	name:string;
	email:string;
	address:address;
	hobbies:string[];
	showHobbies:boolean;

	constructor(){
		this.name='John Doe';
		this.email='john@email.com';
		this.address = {

			street:'11/399, Vikas Nagar',
			city:'Lucknow',
			state:'Uttar Pradesh'
		}
		this.hobbies=['Music','Movies','Sports'];
		this.showHobbies=false;
	}
	toggleHobbies(){
		this.showHobbies=!this.showHobbies;


	}
	addHobby(hobby){

		this.hobbies.push(hobby);
	}
	deleteHobby(i){
		this.hobbies.splice(i,1);

	}
}

interface address{
	
	street:string;
	city:string;
	state:string;
}
