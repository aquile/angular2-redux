import { Component, OnInit } from '@angular/core';
import { AppActions } from '../app.actions';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`clinical-info` component loaded asynchronously');

@Component({
    selector: 'clinical-info',
    styleUrls: ['clinical-info.component.scss'],
    templateUrl: './clinical-info.component.html',
})
export class ClinicalInfoComponent implements OnInit {
    private patients: any[];
    @select(state => state.patients) patients$: Observable <any>;

    constructor(protected actions: AppActions){}

    public ngOnInit() {
        this.patients$.subscribe(arr => this.patients = arr);
    }
}
