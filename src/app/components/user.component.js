"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var UserComponent = (function () {
    function UserComponent() {
        this.name = 'John Doe';
        this.email = 'john@email.com';
        this.address = {
            street: '11/399, Vikas Nagar',
            city: 'Lucknow',
            state: 'Uttar Pradesh'
        };
        this.hobbies = ['Music', 'Movies', 'Sports'];
        this.showHobbies = false;
    }
    UserComponent.prototype.toggleHobbies = function () {
        this.showHobbies = !this.showHobbies;
    };
    UserComponent.prototype.addHobby = function (hobby) {
        this.hobbies.push(hobby);
    };
    UserComponent.prototype.deleteHobby = function (i) {
        this.hobbies.splice(i, 1);
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'user',
            template: "\n  <h1>{{name}}</h1>\n  <p><strong>Email </strong> : {{email}}</p>\n  <p><strong>Address </strong>: {{address.city}} {{address.state}} {{address.street}}</p>\n  <button (click)=\"toggleHobbies()\">{{showHobbies ? \"Hide Hobbies\" : \"Show hobbies\"}}</button>\n  <div *ngIf=\"showHobbies\">\n  <h3>Hobbies</h3>\n\n  <ul>\n  \t<li *ngFor=\"let hobby of hobbies;let i=index\">\n  \t\t{{ hobby }} <button (click)=\"deleteHobby(i)\">X</button>\n  \t</li>\n  </ul>\n  <form (submit)=\"addHobby(hobby.value)\">\n  \t<label> Add Hobby : </label><br/>\n  \t<input type=\"text\" #hobby /><br />\n  </form>\n\n\n  </div>\n  <hr />\n  <h3>Edit User </h3>\n  <form>\n  \t<label>Name : </label>\n  \t<input type=\"text\" name=\"name\" [(ngModel)]=\"name\" /><br/>\n  \t<label>Email : </label>\n  \t<input type=\"text\" name=\"email\" [(ngModel)]=\"email\" /><br/>\n  \t<label>Street : </label>\n  \t<input type=\"text\" name=\"street\" [(ngModel)]=\"address.street\" />\n  \t<br/>\n  \t<label>City : </label>\n  \t<input type=\"text\" name=\"city\" [(ngModel)]=\"address.city\" />\n  \t<br/>\n  \t<label>State : </label>\n  \t<input type=\"text\" name=\"state\" [(ngModel)]=\"address.state\" />\n  \t<br/>\n  </form>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map