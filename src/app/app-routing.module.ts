import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SelectionCoreComponent } from './selection-core/selection-core.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'selection-core', component: SelectionCoreComponent},
  {path: 'courses', component: CoursesComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule],
})
export class AppRoutingModule { }
