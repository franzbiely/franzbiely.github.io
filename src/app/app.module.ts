import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParticlesModule } from 'angular-particle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { TeamComponent } from './team/team.component';
import { ProjectViewComponent } from './project-view/project-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    ContactComponent,
    ProjectsComponent,
    TeamComponent,
    ProjectViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: '/index' },
      { path: 'index', component: DashboardComponent, data: {animation: 'Index'} },
      { path: 'home', component: HomeComponent, data: {animation: 'HomePage'} },
      { path: 'contact', component: ContactComponent, data: {animation: 'ContactPage'} },
      { path: 'projects', component: ProjectsComponent, data: {animation: 'ProjectsPage'} },
      { path: 'team', component: TeamComponent, data: {animation: 'TeamPage'} },
      { path: 'project', component: ProjectViewComponent, data: {animation: 'ProjectPage'} },
    ])


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
