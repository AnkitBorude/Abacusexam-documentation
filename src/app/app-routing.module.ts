import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { EndpointinfoComponent } from './endpointinfo/endpointinfo.component';
import { CoreProjectComponent } from './core-project/core-project.component';
import { ProjectStructureComponent } from './project-structure/project-structure.component';
import { ProjectInstallationComponent } from './project-installation/project-installation.component';
import { KeyFeaturesComponent } from './key-features/key-features.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', component:WelcomeComponent},
  { path: 'architecture/core', component:CoreProjectComponent},
  {path:'architecture/project-structure',component:ProjectStructureComponent},
  {path:'installation',component:ProjectInstallationComponent},
  {path:'key-feature',component:KeyFeaturesComponent},
  {path:'api/:index',component:EndpointinfoComponent},
  {path:'coming-soon',component:ComingSoonComponent},
  {path:'not-found',component:NotFoundComponent},
  {path:'**',redirectTo:'/not-found'},
  {path:'models',redirectTo:'/coming-soon'},
  {path:'testing',redirectTo:'/coming-soon'},
  {path:'about',redirectTo:'/coming-soon'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
