import { Pipe, PipeTransform } from '@angular/core';
import { PublicationModel, PublicationsMetaModel } from 'src/app/articles/articles.service';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(value: PublicationModel, fieldId: number): string {
    return value.data.find(data => data.fieldId === fieldId).value;
  }
}
