import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { SnackbarLoadingService } from './snackbar.loading.service';
import { SnackBarLoadingModel } from './snackbar.loading.model';

@Component({
  selector: 'app-snackbar-loading',
  templateUrl: './snackbar.loading.component.html',
  styleUrls: ['./snackbar.loading.component.css']
})
export class SnackbarLoadingComponent implements OnInit {
  icons: string[];
  snackBarData: SnackBarLoadingModel;
  snackBarRef:MatSnackBarRef<SnackBarLoadingModel>;

  constructor(
    private _snackBarSimple: MatSnackBar,
    ,
    private snackbarLoading: SnackbarLoadingService

  ) {
    this.icons = this.snackbarLoading.getIcons();
    this.snackBarData = this.snackbarLoading.getSnackBarData();
    console.log('this.snackBarData: ', this.snackBarData);
  }

  ngOnInit() {

    // this.snackbarLoading.subjectObservable.subscribe(data => {
    //   this.snackBarData=data;
    //   console.log(data);
    // });
  }

  openNormalSnackBar() {
    const message = "Updating"
    const action = "go away"
    console.log('_snackBar: ', this._snackBarSimple);
    this._snackBarSimple.open(message, action, {
      
      //duration: 2000,
    });
  }

  openLoadingSnackBar() {
    const message = "Updating"
    const action = "go away"
    this._snackBarComplex.openFromComponent(LoadingSnackBar,
      
      
      { data: this.snackBarData.data },
    );
    console.log('_snackBar: ', this._snackBarComplex);
  }

  onRadioChange(event) {
    console.log(event.value);
    this.snackBarData.setIcon = event.value;
  }
}

@Component({
  selector: `snackbar-loading`,
  templateUrl: './snackbar.loader.html',
  styleUrls: ['./snackbar.loading.component.css']
})
export class LoadingSnackBar {
  message = 'message';
  snackBarData: SnackBarLoadingModel;
  constructor(private snackbarLoading: SnackbarLoadingService) {
    // this.snackbarLoading.subjectObservable.subscribe(data => {
    //   this.snackBarData=data
    //   console.log(data);
    // });
    this.snackBarData = this.snackbarLoading.getSnackBarData();
  }
}
