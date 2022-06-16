import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../interfaces/user';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuario: any;
  constructor(private afa: AngularFireAuth, private afs: AngularFirestore) {
    this.usuario = this.afs.collection<User>('usuario');
   }

  login(user: User){
    
  }

  register(user: User){
    return this.afa.createUserWithEmailAndPassword(user.email, user.password).then (cred => {
      return this.afs.collection(this.usuario).doc(cred.user.uid).set({
        nome: user.nome,
        cpf: user.cpf,
        tel: user.tel
      })
    });
  }

  logout(): void{

  }

  getAuth(){

  }
}
