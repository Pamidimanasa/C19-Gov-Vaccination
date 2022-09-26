import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from '../news';
import { NewsService } from '../news.service'

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.css']
})
export class CreateNewsComponent implements OnInit {
  news: News = new News();

  constructor(private newsService:NewsService, private router:Router) { }

  ngOnInit(): void {
  }
  saveNews(){
    this.newsService.createNews(this.news).subscribe((data: any) =>{
      console.log(data);
      this.goToNewsList();
    },(error:any)=>console.log(error));
  }
  goToNewsList(){
    this.router.navigate(['/news']);

  }
  onSubmit(){
    console.log(this.news);
    this.saveNews();
  }
    }
  


