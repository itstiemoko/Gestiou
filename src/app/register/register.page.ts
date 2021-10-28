import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//Firebase module
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

//Router for path access
import { Router } from '@angular/router';

//Loading indicator module
import { LoadingController } from '@ionic/angular';

//Service Project
import { ServiceProjectService } from '../MyServices/service-project.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public userRegistrationData: FormGroup
  registerDate = new Date()

  constructor(private formBuilder: FormBuilder,private router: Router,
    private auth: AngularFireAuth, private firestore: AngularFirestore,
    private myService: ServiceProjectService, private loadingIndicator: LoadingController)
  {
    this.userRegistrationData = this.formBuilder.group({
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
  }



  async userRegistration()
  {
    //Get current date and time
    let currentDateAndTime = 'Le '+this.registerDate.getDate()+', '+this.registerDate.getHours()+'h: '+this.registerDate.getMinutes()+'min '+this.registerDate.getSeconds()+'s'

    //Loading indicator creation
    const loading = await this.loadingIndicator.create({
      message: 'Chargement',
      spinner: 'circles',
      duration: 2000
    });
    loading.present()

    //Registration
    this.auth.createUserWithEmailAndPassword(this.userRegistrationData.value.email, this.userRegistrationData.value.password).then(
      (data) => {
        this.firestore.collection('users').doc(data.user.uid).set({
          'userLastName': this.userRegistrationData.value.lastname,
          'userFirstName': this.userRegistrationData.value.firstname,
          'userEmail': this.userRegistrationData.value.email,
          'userPassword': this.userRegistrationData.value.password,
          'dateCreation': currentDateAndTime
        }).then(() => {
          loading.dismiss()
          this.myService.toastMessage("Inscription effectuée...", "success")
          this.router.navigate(['login'])
        }).catch(error =>{
          this.myService.toastMessage(error.message, "danger")
        })
      }
    ).catch(error =>{
      console.log(error.message)
      this.myService.toastMessage(error.message, "danger")
    })
  }

}
