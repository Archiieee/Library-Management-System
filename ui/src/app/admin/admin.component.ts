import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  admins =[
    {
      "id": 1,
      "name": "Admin1",
      "username": "username1",
      "password": "password1"
    },
    {
      "id": 33,
      "name": "archi",
      "username": "string",
      "password": "string"
    },
    {
      "id": 65,
      "name": "Admin1",
      "username": "username1",
      "password": "password1"
    },
    {
      "id": 66,
      "name": "Admin2",
      "username": "username2",
      "password": "password2"
    },
    {
      "id": 67,
      "name": "Admin3",
      "username": "username3",
      "password": "password3"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
