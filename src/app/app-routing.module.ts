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
import { AuthenticationComponent } from './authentication/authentication.component';
import { EnviromentVariablesComponent } from './enviroment-variables/enviroment-variables.component';
import { ProjectInstallationDockerComponent } from './project-installation-docker/project-installation-docker.component';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/installation-with-docker' },
  { path: 'welcome', component:WelcomeComponent},
  { path: 'architecture/core', component:CoreProjectComponent},
  {path:'architecture/project-structure',component:ProjectStructureComponent},
  {path:'installation',component:ProjectInstallationComponent},
  {path:'installation-with-docker',component:ProjectInstallationDockerComponent},
  {path:'key-feature',component:KeyFeaturesComponent},
  {path:'api/:index',component:EndpointinfoComponent},
  {path:'coming-soon',component:ComingSoonComponent},
  {path:'not-found',component:NotFoundComponent},
  {path:'authentication',component:AuthenticationComponent},
  {path:'enviroment-variables',component:EnviromentVariablesComponent},
  {path:'testing',component:TestingComponent},
  {path:'models',redirectTo:'/coming-soon'},
  {path:'about',redirectTo:'/coming-soon'},
  {path:'**',redirectTo:'/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
