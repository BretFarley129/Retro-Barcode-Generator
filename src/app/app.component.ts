import { Component } from '@angular/core';

var arr= [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
  'greenyellow',
  'wheat',
  'maroon',
];
var thing = [];
for (var i =0; i < arr.length; i++){
  thing.push(arr[Math.floor(Math.random()*10)])
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  colors = thing;

}
