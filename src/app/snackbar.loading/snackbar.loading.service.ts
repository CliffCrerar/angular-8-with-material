
import { Injectable } from '@angular/core';
import { SnackBarLoadingModel } from './snackbar.loading.model';
import { SnackBarDataModel } from './snackbar.loading.model';
import { Observable, Subject } from 'rxjs';
@Injectable()
export class SnackbarLoadingService {
    icons = ['sync', 'donut_large', 'settings_backup_restore', 'replay', 'sentiment_satisfied_alt', 'gps_fixed', 'gps_not_fixed', 'refresh', 'data_usage', 'rotate_right', 'rotate_left', 'filter_tilt_shift']
    snackBar: SnackBarLoadingModel;
    errorIcon = 'sync_problem';
    snackBarData = new SnackBarDataModel('Loading please wait!', 'Dismiss');
    hasAction = true;
    setIcon = this.icons[0];
    constructor() {
        this.snackBar = new SnackBarLoadingModel(
            this.errorIcon,this.snackBarData,true,this.icons,this.icons[0]
        );
    }
    getSnackBarData(){
        return this.snackBar;
    }

    getIcons() {
        return this.icons;
    }
}