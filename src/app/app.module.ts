import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainPresentationComponent } from './main-presentation/main-presentation.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { DataProtectComponent } from './data-protect/data-protect.component';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPresentationComponent,
    AboutMeComponent,
    MySkillsComponent,
    ImprintComponent,
    PortfolioComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    DataProtectComponent,
    HeaderMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
