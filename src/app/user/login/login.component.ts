import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showAlert = false
  alertMsg = 'Please wait! Your account is being created.'
  alertColor = 'blue'
  inSubmission = false;

  constructor(private auth: AngularFireAuth){}

  credentials = {
    email: '',
    password: ''
  }

  async login(){
    this.inSubmission = true
    this.showAlert = true
    this.alertMsg = 'Please wait! Your account is being created!'
    this.alertColor = 'blue'

    try{
      await this.auth.signInWithEmailAndPassword(this.credentials.email, this.credentials.password)

      this.alertMsg = 'Success! Your are logged in!'
      this.alertColor = 'green'
    }catch(e){
      this.alertMsg = 'An unexpected error occurred! Please try again later'
      this.alertColor = 'red'
      this.inSubmission = false
    }
    
  }
}
