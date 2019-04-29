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
import { TestComponent } from './test/test.component';
import { OwlModule } from 'ngx-owl-carousel';
import { Project1Component } from './project1/project1.component';
import { Project2Component } from './project2/project2.component';
import { Project3Component } from './project3/project3.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    ContactComponent,
    ProjectsComponent,
    TeamComponent,
    ProjectViewComponent,
    TestComponent,
    Project1Component,
    Project2Component,
    Project3Component
  ],
  imports: [
    OwlModule,
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
      { path: 'test', component: TestComponent, data: {animation: 'TestPage'} },
      { path: 'project1', component: Project1Component, data: {animation: 'Project1'} },
      { path: 'project2', component: Project2Component, data: {animation: 'Project2'} },
      { path: 'project3', component: Project3Component, data: {animation: 'Project3'} }
    ])


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
