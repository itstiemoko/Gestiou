import { Injectable } from '@angular/core';

//Firebase module
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

//Toast module
import { ToastController, LoadingController } from '@ionic/angular';

//Access to route
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceProjectService {
  itemsCollections: AngularFirestoreCollection<any>

  constructor
  ( private auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private toast: ToastController,
    private loadingIndicator: LoadingController,
    private router: Router
  ){}

  //Custom toast message
  async toastMessage(message, color)
  {
    const _toast = await this.toast.create({
      message: message,
      color: color,
      position: 'top',
      duration: 1000
    })

    _toast.present()
  }



  //Log In Method
  async logIn(email, password)
  {
    const loading = await this.loadingIndicator.create({
      message: 'Chargement',
      spinner: 'circles',
      duration: 2000
    });

    loading.present()

    this.auth.signInWithEmailAndPassword(email, password).then((data) => {
      loading.dismiss() //Stop the loading indicator
      this.toastMessage("Connexion réussie...", "success") //Toast message for success connection

      this.router.navigate(['home'])
    }).catch(error => {
      loading.dismiss()
      this.toastMessage(error.message, "danger")
    })
  }

  //Log Out Method
  async logOut()
  {
    const loading = await this.loadingIndicator.create({
      message: 'Chargement',
      spinner: 'circles',
      duration: 2000
    });

    loading.present()

    this.auth.signOut().then(() => {
      loading.dismiss()
      this.router.navigate(['login'])
    })
  }

  //Get All Users in database
  getAllUsers()
  {
    this.itemsCollections = this.firestore.collection('users') //Get specify collection
    return this.itemsCollections.valueChanges()
  }

  getCurrentUser(collectionName, userId)
  {
    
  }

}
