import { ArticlesService } from './../articles/articles.service';
import { PublicationModel, PublicationsMetaModel } from 'src/app/articles/articles.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { concatMap, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
    selector: 'app-articles-edit',
    templateUrl: './articles-edit.component.html',
    styleUrls: ['./articles-edit.component.scss']
})
export class ArticlesEditComponent implements OnInit {

    public article: PublicationModel;
    public metaData: Array<PublicationsMetaModel>;
    public editForm: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private articlesService: ArticlesService) { }

    ngOnInit(): void {
        this.route.params.pipe(
            switchMap(params => this.articlesService.getArticle(+params.id)),
            tap(publication => this.article = publication),
            concatMap(_ => this.articlesService.getEditMeta()),
            tap((metaData: Array<PublicationsMetaModel>) => {
            this.metaData = metaData
                .filter(meta => !meta.isHidden)
                .sort((a, b) => a.priority - b.priority);
            })
        ).subscribe(_ => {
            if (this.article) {
            this.createForm();
            }
        });
    }

    private createForm(): void {
        this.editForm = new FormGroup({});

        this.metaData.forEach(meta => {
        const formControl = new FormControl({
            value: meta.type,
            disabled: meta.isReadOnly
        }, meta.isMandatory ? [Validators.required] : []);

        this.editForm.addControl(meta.fieldCode, formControl);
        });
    }

    public isRequired(formControlName: string): boolean {
        const control = this.editForm.controls[formControlName];
        return control.hasError('required') && (control.touched || control.dirty);
    }

    save(): void {
        if (this.editForm.invalid) {
        return;
        }

        const { id, code } = this.article;
        const data = [];

        for (const key in this.editForm.value) {
        if (this.editForm.value.hasOwnProperty(key)) {
            const controlMetadata = this.metaData.find(metadata => metadata.fieldCode === key);

            data.push({
            fieldId: controlMetadata.fieldId,
            value: controlMetadata.type === 'datatime' ?
                this.editForm.value[key].toString() :
                this.editForm.value[key]
            });
        }
        }

    }

}
