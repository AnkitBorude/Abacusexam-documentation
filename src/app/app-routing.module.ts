import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { IntroductionComponent } from './apiendpointinfo/introduction.component';
import { EndpointinfoComponent } from './endpointinfo/endpointinfo.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/introduction' },
  {path:'introduction',component:IntroductionComponent},
  { path: 'welcome', component:WelcomeComponent},
  {path:'api/:index',component:EndpointinfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
