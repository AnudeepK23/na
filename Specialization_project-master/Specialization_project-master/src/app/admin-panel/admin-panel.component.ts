import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Users } from '../Users';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(private userservice : UserService, private router : Router) { }

  private property : Users = new Users();

  signedIn = false;
  // public users : Users[] | undefined;
  public users : any | undefined;


  ngOnInit(): void {
    this.userservice.getUsers().subscribe((data: Users[] ) => {
      this.users = data;
      console.log(data)
    });
  }

  public deleteUser(id : number){
    let resp = this.userservice.deleteUser(id);
    resp.subscribe((data) => this.users = data)
  }

  public updateUser(id : number){
    this.router.navigate(['updateUser', id])
    
  }

  public viewDetails(id : number){
    this.router.navigate(['view-User-details', id])
  }

}
