import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { QuestionComponent } from './question/question.component';
import { HeaderComponent } from './header/header.component';
import { ResultComponent } from './result/result.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ScoreBoardComponent } from './score-board/score-board.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'',
    component:RegisterComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'welcome',
    component:WelcomePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'score',
    component:ScoreBoardComponent
  },
  {
    path:'result',
    component:ResultComponent
  },
  {
    path:'welcome',
    component:WelcomePageComponent
  },
  {
    path:'question',
    component:QuestionComponent
  },
  {
    path:'header',
    component:HeaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
