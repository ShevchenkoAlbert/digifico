import { tap, concatMap, take } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ArticlesService, PublicationModel, PublicationsDto, PublicationsMetaModel } from './articles.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  data: Array<PublicationModel>;
  metaData: Array<PublicationsMetaModel>;
  isOpen: boolean;

  constructor(
      private articlesService: ArticlesService,
      private authService: AuthService,
      private router: Router) { }

  ngOnInit(): void {

    this.articlesService.getMeta().pipe(
      tap(publicationsMetadata => {
        this.metaData = publicationsMetadata
          .filter(metadata => !metadata.isHidden)
          .sort((a, b) => a.priority - b.priority);
      }),
      concatMap(() => this.articlesService.getArticles())
    ).subscribe((articles: PublicationsDto) => {
      this.data = articles.result;
    })
  }

  logout(): void {
    return this.authService.logout();
  }

  selectRow(id: number) {
    this.router.navigate([`/articles/${id}`])
  }

  close() {
    this.router.navigate(['../'])
  }

}
