import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from '../news'
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  news:News[]=[];

  constructor(private newsService:NewsService,private router:Router) { }

  ngOnInit(): void {
    this.getNews()
  }
  
  private getNews(){
    this.newsService.getNewsList().subscribe((data: any) => {
      this.news = data;
    });
  }

  updateNews(id: number){
    this.router.navigate(['update-news',id]);
  }

  deleteNews(id: number){
    this.newsService.deleteNews(id).subscribe( data => {
      console.log(data);
      this.getNews();
    })
  }
}  

  
  



