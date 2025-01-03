import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { IntroductionComponent } from './introduction/introduction.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/introduction' },
  {path:'introduction',component:IntroductionComponent},
  { path: 'welcome', component:WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
