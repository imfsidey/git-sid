import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users =[

    {name:'siddharth'},
    {name:'sachin'},
    {name:'Rohit'}




  ]

  constructor() { }

  ngOnInit() {
  }

}
