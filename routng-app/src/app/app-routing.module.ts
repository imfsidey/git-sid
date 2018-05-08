import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {UserlistComponent} from "./userlist/userlist.component";
import {UserComponent} from "./user/user.component";

const routes: Routes = [

  {path:'About',component:AboutComponent},
  {path:'Home',component:HomeComponent},
  {path:'User',children:[


      {path:'list',component:UserlistComponent,children:[

          {path:'detail/:name',component:UserComponent}

        ]}


    ]},


  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',redirectTo:'/home',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent=[AboutComponent,HomeComponent,UserlistComponent,UserComponent]
