import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { News } from './news';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  
  private baseURL = "http://localhost:8080/news";

  constructor(private httpClient:HttpClient) { }

  getNewsList():Observable<News[]>{
    return this.httpClient.get<News[]>('${this.baseURL}');
  }

  createNews(news: News):Observable<object>{
    return this.httpClient.post('${this.baseURL}', news);
  }

  getNewsById(id: number):Observable<News>{
    return this.httpClient.get<News>('${this.baseURL}/${id}');
  }

  updateNews(id: number, news: News):Observable<object>{
    return this.httpClient.put('${this.baseURL}/${id}', news);
  }

  deleteNews(id: number):Observable<object>{
    return this.httpClient.delete('${this.baseURL}/${id}');
  }
}








