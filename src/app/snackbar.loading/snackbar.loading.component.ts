import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
//import { SnackbarInternalService } from './snackbar.internal.service';
import { SnackBarLoadingModel } from './snackbar.loading.model';
// import { Observable, Subject } from 'rxjs';
import { SnackbarInternalService } from './snackbar.internal.service';

@Component({
  selector: 'app-snackbar-loading',
  templateUrl: './snackbar.loading.component.html',
  styleUrls: ['./snackbar.loading.component.css'],
  providers: [SnackbarInternalService],
})
export class SnackbarLoadingComponent implements OnInit {
  
  icons: string[];
  snackBar: SnackBarLoadingModel;
  simpleSnackBarRef: MatSnackBarRef<SimpleSnackBar>;
  componentSnackBarRef: MatSnackBarRef<LoadingSnackBar>;
  loadingStateDisplay = false;
  btnDisplayState = true;

  /* CONSTRUCTOR */
  constructor(
    private _snackBar: MatSnackBar,
    private internalService: SnackbarInternalService
  ) {
    this.icons = this.internalService.getIcons();
    this.snackBar = this.internalService.getSnackBar();
  }
  
  /* ON INIT */
  ngOnInit() {
    // this.displayIcon = this.snackBar.setIcon
  }
  
  /* CLASS METHODS */
  // Normal Snackbar
  openNormalSnackBar() {
    const message = this.snackBar.state.message;
    this.simpleSnackBarRef = this._snackBar.open(message);
  }
  // Loading snackbar
  openLoadingSnackBar() {
    if(!this.loadingStateDisplay){
      this.componentSnackBarRef = this._snackBar.openFromComponent(LoadingSnackBar,{ data: this.snackBar });
      this.loadingStateDisplay=true;
    } else {
      return 
    }
  }
  
  dismissSnackBar(){
    this.componentSnackBarRef.dismiss();
  }

  onRadioChange(event) {
    this.internalService.setNewIcon(event.value);
    this.snackBar.loadingIcon = event.value;    
  }
  
  ngOnDestroy(){
    console.log('ng on destroy');
  }
  
  startHttp(){
    this.openLoadingSnackBar();
    this.snackBar.state.handlingHttp.push(new Date().toLocaleTimeString());
    this.snackBar.state.callCounter++;
    this.btnDisplayState=false;
  }
  
  endHttp(){
    this.snackBar.state.handlingHttp.splice(0,1);
    this.snackBar.state.callCounter--;
    if(this.snackBar.state.callCounter===0){
      this.toggleControlButtons();
      this.dismissSnackBar();
    }
  }
  
  throwError(){
    //this.snackBar.state
      this.internalService.setError();
      this.loadingStateDisplay=false;
      this.snackBar.state.handlingHttp =[];
      this.snackBar.state.callCounter=0;
      this.snackBar.state.spinningClass = '';
      this.snackBar.state.error = true;
      this.openLoadingSnackBar();
      this.componentSnackBarRef.instance.snackBarView = this.snackBar;
    }
    // buttons
  toggleControlButtons(){
    this.loadingStateDisplay=!this.loadingStateDisplay;
    this.btnDisplayState=!this.btnDisplayState;
  }
}

/* ---------------------------------------------------------------------- */
/* ---------------------------------------------------------------------- */

@Component({
  selector: `snackbar-loading`,
  templateUrl: './snackbar.loader.html',
  styleUrls: ['./snackbar.loading.component.css'],
  providers: [SnackbarInternalService]
})
export class LoadingSnackBar implements OnInit {
  dismissTest = false;
  snackBarView: SnackBarLoadingModel;
  constructor(
    private internalService: SnackbarInternalService
  ) {
    this.snackBarView = this.internalService.getSnackBar();
    
  }
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class
  }
}
