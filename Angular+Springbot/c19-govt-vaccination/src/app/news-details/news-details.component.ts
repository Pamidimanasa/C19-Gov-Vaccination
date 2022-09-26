import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { News } from '../news';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {

  id!: number;
  news!: News;

  constructor(private route:ActivatedRoute,private newsService:NewsService,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.news=new News();
    this.newsService.getNewsById(this.id).subscribe((data: News)=>{

      
    });
  }

  
}

