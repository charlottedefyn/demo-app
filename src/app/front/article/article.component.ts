import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router' ;
import { ArticlesService , Article } from '../../service/articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article = {
    title : 'titre',
    body : 'body',
    id: 1,
    userId : 1
  };
  constructor(
      private service: ArticlesService ,
      private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.paramMap
        .subscribe( (params) => {
            const id = +params.get('id') ;
            this.service.getPosts().subscribe( (response ) => {

              this.article = response[id - 1];
            } );

        });

  }
}
