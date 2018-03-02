import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SinglePostComponent } from './single-post/single-post.component';

const routes: Routes = [
  {
  	path: '',
  	component: HomeComponent
  },
  {
  	path: 'about',
  	component: AboutComponent
  },
  {
  	path: 'single-post/:id',
  	component: SinglePostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
