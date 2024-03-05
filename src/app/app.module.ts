import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TemplateComponent } from './landing-page/template/template.component';
import { BackgroundComponent } from './background/background.component';
import { ButtonStartComponent } from './button-start/button-start.component';
import { SelectionCoreComponent } from './selection-core/selection-core.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TemplateComponent,
    BackgroundComponent,
    ButtonStartComponent,
    SelectionCoreComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
