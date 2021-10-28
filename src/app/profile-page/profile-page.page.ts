import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ServiceProjectService } from '../MyServices/service-project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.page.html',
  styleUrls: ['./profile-page.page.scss'],
})
export class ProfilePagePage implements OnInit {
  currentUserData: any

  constructor(private firestore: AngularFirestore, private auth: AngularFireAuth,
    private myService: ServiceProjectService, private router: Router)
  {
    this.auth.authState.subscribe(
      (result)=>{
        if(result && result.uid)
        {
          this.firestore.collection('users').doc(result.uid).valueChanges().subscribe(
            (data) =>{
              this.currentUserData = data
            }
          )
        }else
        {
          console.log("Non Connectée")
          this.router.navigate(['login'])
        }
      }
    )
  }

  ngOnInit() {
  }

  logOut()
  {
    this.myService.logOut()
  }

}
