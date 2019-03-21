import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HomeComponent }   from './home/home.component';
import { ContactComponent }   from './contact/contact.component';
import { ProjectsComponent }   from './projects/projects.component';
import { TeamComponent }   from './team/team.component';
import { ProjectViewComponent }   from './project-view/project-view.component';
const routes: Routes = [
  { 
    path: '',
    component: DashboardComponent 
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'project',
    component: ProjectViewComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
