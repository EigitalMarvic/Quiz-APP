import { AuthGuard } from './service/auth/auth.guard';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { QuestionsComponent } from './questions/questions.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'signup',pathMatch:'full'},
  {path:'signup', component:SignUpComponent},
  {path:'questions', component:QuestionsComponent,canActivate:[AuthGuard]},
  {path:'**', component:PagenotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
