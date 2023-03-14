import { Component } from '@angular/core';
import { RegisterformComponent } from './registerform/registerform.component';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from './profile/profile.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProjectDemo';
  constructor(private matDialog:MatDialog){}
  openDialog(){
    this.matDialog.open(RegisterformComponent,{
      width:'350px',})
  }


}
