import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from './news-list/news-list.component';
import { CreateNewsComponent } from './create-news/create-news.component';


const routes: Routes = [
  {path:'news', component:NewsListComponent},
  {path:'create-news', component:CreateNewsComponent},
  {path:'',redirectTo:'news',pathMatch:'full'},
  {path: 'update-news/:id', component: CreateNewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
