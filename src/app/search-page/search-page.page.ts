import { Component, OnInit } from '@angular/core';
import { ServiceProjectService } from '../MyServices/service-project.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.page.html',
  styleUrls: ['./search-page.page.scss'],
})
export class SearchPagePage implements OnInit {
  users: any
  searchWord: string

  constructor(private myService: ServiceProjectService)
  {
    this.getUsersData()
  }

  ngOnInit() {
  }

  getUsersData()
  {
    this.myService.getAllUsers().subscribe(
      (usersData) =>{
        this.users = usersData
      }
    )
  }

}
