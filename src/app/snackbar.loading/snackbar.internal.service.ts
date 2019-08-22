
import { Injectable } from '@angular/core';
import { SnackBarLoadingModel,SnackBarStateModel } from './snackbar.loading.model';
import { Subject } from 'rxjs';

@Injectable()
export class SnackbarInternalService {
    newIconSubject = new Subject<string>();
    iconSetOnNew = 'sync';
    icons = ['sync', 'donut_large', 'settings_backup_restore', 'replay', 'sentiment_satisfied_alt', 'gps_fixed', 'gps_not_fixed', 'refresh', 'data_usage', 'rotate_right', 'rotate_left', 'filter_tilt_shift']
    snackBarData: SnackBarLoadingModel;
    errorIcon = 'sync_problem';
    snackBarState = new SnackBarStateModel('Loading please wait!', 'Dismiss');
    hasAction = true;
    icon = this.icons[this.icons.indexOf(this.iconSetOnNew)];
    constructor() {
        this.snackBarData = new SnackBarLoadingModel(this.errorIcon,this.snackBarState,true,this.icons,this.icon);
    }

    getSnackBar(){
        return this.snackBarData;
    }

    getIcons() {
        return this.icons;
    }
    
    getIcon() {
        return this.icon;
    }
    
    setNewIcon(newIcon:string){
        this.icon = newIcon;
    }
    
    setNewMessage(msg:string){
        this.snackBarData.state.message = msg;
    }
    
    setError(){
        this.snackBarData.loadingIcon = this.snackBarData.errorIcon;
        this.setNewMessage("ERROR: Something went wrong, please reload page.")
    }
}