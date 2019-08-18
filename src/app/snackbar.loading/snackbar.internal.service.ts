
import { Injectable } from '@angular/core';
import { SnackBarLoadingModel } from './snackbar.loading.model';
import { SnackBarDataModel } from './snackbar.loading.model';
import { Observable, Subject, Subscription } from 'rxjs';
import { SnackbarLoadingComponent, LoadingSnackBar } from './snackbar.loading.component';

@Injectable()
export class SnackbarInternalService {
    /* Declare communication observables */
    public controllerToView: Subject<any>;
    public viewToController: Subject<any>;
    /* Instantiate model */
    icons = ['sync', 'donut_large', 'settings_backup_restore', 'replay', 'sentiment_satisfied_alt', 'gps_fixed', 'gps_not_fixed', 'refresh', 'data_usage', 'rotate_right', 'rotate_left', 'filter_tilt_shift']
    snackBar: SnackBarLoadingModel;
    errorIcon = 'sync_problem';
    snackBarData = new SnackBarDataModel('Loading please wait!', 'Dismiss');
    hasAction = true;
    setIcon = this.icons[0];
    constructor() {
        this.snackBar = new SnackBarLoadingModel(this.errorIcon,this.snackBarData,true,this.icons,this.icons[0]);
        this.controllerToView = new Subject();
        this.viewToController = new Subject();
        // console.log('viewToController: ', this.viewToController);
        // console.log('controllerToView: ', this.controllerToView);
    }

    getSnackBarData(){
        return this.snackBar;
    }

    getIcons() {
        return this.icons;
    }

    sendMessageToController(canBeAnything:string) {
        // console.log('canBeAnything: ', canBeAnything);
        // console.log('this.viewToController: ', this.viewToController);
        this.viewToController.next(canBeAnything);   
    }

    sendMessageToView(canBeAnything:string){
        // console.log('canBeAnything: ', canBeAnything);
        // console.log('this.controllerToView: ', this.controllerToView);
        // this.controllerToViewOther = 
        this.controllerToView.next(canBeAnything);
    }
}