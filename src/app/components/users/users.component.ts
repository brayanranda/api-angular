import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users:User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(el => {
      this.users = el;
    })
  }

}
