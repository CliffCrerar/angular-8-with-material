import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
//import { SnackbarInternalService } from './snackbar.internal.service';
import { SnackBarLoadingModel } from './snackbar.loading.model';
import { Observable, Subject } from 'rxjs';
import { SnackbarInternalService } from './snackbar.internal.service';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-snackbar-loading',
  templateUrl: './snackbar.loading.component.html',
  styleUrls: ['./snackbar.loading.component.css']
  //providers: [SnackbarInternalService]
})
export class SnackbarLoadingComponent implements OnInit {
  icons: string[];
  snackBarData: SnackBarLoadingModel;
  simpleSnackBarRef: MatSnackBarRef<SnackBarLoadingModel>;
  componentSnackBarRef: MatSnackBarRef<LoadingSnackBar>;
  msgToView;
  // msgFromView: Subject<any>;
  componentSnackbarObservable: Observable<MatSnackBar>

  /* CONSTRUCTOR */
  constructor(
    private _snackBar: MatSnackBar,
    private internalService: SnackbarInternalService
  ) {
    this.icons = this.internalService.getIcons();
    this.snackBarData = this.internalService.getSnackBarData();
    // this.msgToView = this.internalService.sendMessageToView;
    // this.msgFromView = this.internalService.viewToController;
    // Set observables
    // this.msgToView this

    console.log('this.snackBarData: ', this.snackBarData);
    console.log('this.msgToView: ', this.msgToView);
  }
  
  /* ON INIT */
  ngOnInit() {
    // this.msgFromView.subscribe(
    //   (v_msg) => console.log('Message from view: ', v_msg)
    // );
  }
  // Normal Snackbar
  openNormalSnackBar() {
    const message = "Updating"
    const action = "go away"
    console.log('_snackBar: ', this._snackBar);
    this.simpleSnackBarRef = this._snackBar.open(message, action, {

      //duration: 2000,
    });
  }
  // Loading snackbar
  openLoadingSnackBar() {
    const message = "Updating";
    const action = "go away";
    this.componentSnackbarObservable = <any>this._snackBar.openFromComponent(LoadingSnackBar,

      { data: this.snackBarData.data },
    );
    console.log('this.componentSnackBarRef: ', this.componentSnackbarObservable);

    // this.componentSnackbarObservable.subscribe((openedEvent)=>{
    //   console.log('openedEvent: ', openedEvent);
    //   console.log('Snackbar opened');
    // })
  }

  onRadioChange(event) {
    console.log(event.value);
    this.snackBarData.setIcon = event.value;
  }

  commsToView() {
    const msg = 'Sup view'
    console.log('Controller: ', msg);
    // this.msgToView(msg);
    this.internalService.sendMessageToView(msg);
  }
}

/* ---------------------------------------------------------------------- */
/* ---------------------------------------------------------------------- */

@Component({
  selector: `snackbar-loading`,
  templateUrl: './snackbar.loader.html',
  styleUrls: ['./snackbar.loading.component.css']
  // providers: [SnackbarInternalService]
})
export class LoadingSnackBar implements OnInit, OnDestroy {
  message = 'message';
  dismissTest = true;
  snackBarData: SnackBarLoadingModel;
  msgFromController: Subject<any>;
  msgToController: Subject<any>;
  constructor(
    private internalService: SnackbarInternalService
  ) {
    this.snackBarData = this.internalService.getSnackBarData();
    this.msgFromController = this.internalService.controllerToView;
    this.msgToController = this.internalService.viewToController;

    console.log('msgFromController: ', this.msgFromController);
    // console.log('msgToController: ', this.msgToController);
  }

  ngOnInit() {
    console.log(this);
    this.msgFromController.subscribe((c_msg) => console.log('MSG from controller(view): ', c_msg))

    this.internalService.controllerToView.subscribe((c_msg) => console.log('MSG from controller(view): ', c_msg))
  }

  ngOnDestroy(){
    console.log('ng on destroy');
  }
}
