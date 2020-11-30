import { Observable, of } from "rxjs";
import { Injectable } from "@angular/core";
import publicationValues from '../../data/Publication.values.json';
import publicationMeta from '../../data/Publication.metadata.json';
import publicationEdit from '../../data/PublicationEdit.values.json';
import editMeta from '../../data/PublicationEdit.metadata.json';


export interface PublicationsDto {
  pagingInfo: {},
  result: Array<PublicationModel>
}

export interface PublicationDataModel {
  fieldId: number;
  value: string;
}

export interface PublicationModel {
  code: string;
  id: number;
  data: Array<PublicationDataModel>
}

export interface PublicationsMetaModel {
  fieldCode: string;
  fieldId: number;
  id: number;
  isHidden: boolean;
  isMandatory: boolean;
  isReadOnly: boolean;
  name: string;
  placeholderTxt: string;
  priority: number;
  type: string;
}

@Injectable()
export class ArticlesService {
  constructor() {};

  getArticles(): Observable<PublicationsDto> {
    return of(publicationValues);
  }

  getMeta(): Observable<Array<PublicationsMetaModel>> {
    return of(publicationMeta);
  }

  getArticle(id: number): Observable<PublicationModel> {
      return of(publicationEdit);
  }

  getEditMeta(): Observable<Array<PublicationsMetaModel>> {
      return of(editMeta);
  }
}
