import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
;import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { AppComponent } from './app.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import {NzTabsModule} from 'ng-zorro-antd/tabs';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { EndpointinfoComponent } from './endpointinfo/endpointinfo.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import {NzCollapseModule} from 'ng-zorro-antd/collapse';
import {NzListModule} from 'ng-zorro-antd/list';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { CoreProjectComponent } from './core-project/core-project.component';
import { ProjectStructureComponent } from './project-structure/project-structure.component';
import { ProjectInstallationComponent } from './project-installation/project-installation.component';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { KeyFeaturesComponent } from './key-features/key-features.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { NzResizableModule} from 'ng-zorro-antd/resizable';
import { ProjectInstallationDockerComponent } from './project-installation-docker/project-installation-docker.component';
import { EnviromentVariablesComponent } from './enviroment-variables/enviroment-variables.component';
registerLocaleData(en);
@NgModule({
  declarations: [
    AppComponent,
    EndpointinfoComponent,
    WelcomeComponent,
    CoreProjectComponent,
    ProjectStructureComponent,
    ProjectInstallationComponent,
    KeyFeaturesComponent,
    ComingSoonComponent,
    NotFoundComponent,
    AuthenticationComponent,
    ProjectInstallationDockerComponent,
    EnviromentVariablesComponent
  ],
  imports: [
    BrowserModule,
    NzLayoutModule,
    NzIconModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzCardModule,
    NzAvatarModule,
    NzButtonModule,
    NzStatisticModule,
    BrowserAnimationsModule,
    NzGridModule,
    AppRoutingModule,
    IconsProviderModule,
    FormsModule,
    NzSwitchModule,
    NzDescriptionsModule,
    NzTagModule,
    NzDividerModule,
    NzTableModule,
    NzTabsModule,
    NzTypographyModule,
    NzToolTipModule,
    NzFlexModule,
    NzProgressModule,
    NzCarouselModule,
    NzListModule,
    NzCollapseModule,
    NzTimelineModule,
    NzStepsModule,
    NzAffixModule,
    NzPopoverModule,
    NzResizableModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
