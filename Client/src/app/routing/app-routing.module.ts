import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { UserComponent } from '../components/user/user.component';
import { AuthGuard } from '../auth/auth.guard';
import { BookComponent } from '../components/book/book.component';
import { AuthorComponent } from '../components/author/author.component';
import { IssueComponent } from '../components/issue/issue.component';
import { PagenotfoundComponent } from '../components/pagenotfound/pagenotfound.component';
import { HeaderComponent } from '../components/header/header.component';


const routes: Routes = [

  {path: '',component:HomeComponent },
  {path : 'login' , component : LoginComponent},
  {path : 'users' , component : UserComponent,canActivate:[AuthGuard]},
  {path : 'books' , component : BookComponent,canActivate:[AuthGuard]},
  {path : 'authors',component : AuthorComponent,canActivate:[AuthGuard]},
  {path : 'issues',component:IssueComponent,canActivate:[AuthGuard]},
  {path : '**' ,component:PagenotfoundComponent},
  {path : 'header' ,component:HeaderComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BookComponent,AuthorComponent,IssueComponent]