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
import { IntroductionComponent } from './apiendpointinfo/introduction.component';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import {NzTabsModule} from 'ng-zorro-antd/tabs';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { EndpointinfoComponent } from './endpointinfo/endpointinfo.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
registerLocaleData(en);
@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    EndpointinfoComponent
  ],
  imports: [
    BrowserModule,
    NzLayoutModule,
    NzIconModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzCardModule,
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
    NzToolTipModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
