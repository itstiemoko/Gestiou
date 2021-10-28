import { Component } from '@angular/core';

import { Router } from '@angular/router';

//My Services
import { ServiceProjectService } from '../MyServices/service-project.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  users: any

  constructor(private myService: ServiceProjectService, private router: Router)
  {
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
