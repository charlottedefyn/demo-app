import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;

export interface Article {
  body: string;
  id: number;
  title: string;
  userId: number;
}


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private _url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this._url) ;
  }


}
