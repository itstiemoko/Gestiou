import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/compat/auth';

//My Services
import { ServiceProjectService } from '../MyServices/service-project.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  users: any

  constructor(private myService: ServiceProjectService, private router: Router, private auth: AngularFireAuth)
  {
    this.auth.authState.subscribe(
      result => {
        if(!result)
        {
          this.router.navigate(['login'])
        }
      }
    )
    this.getUsersData()
  }

  getUsersData()
  {
    this.myService.getAllUsers().subscribe(
      (usersData) =>{
        this.users = usersData
      }
    )
  }

  goToProfile()
  {
    this.router.navigate(['profile-page'])
  }

}
