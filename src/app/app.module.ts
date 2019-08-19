
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,FormGroup, ReactiveFormsModule } from '@angular/forms';


// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Angular material 
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
 import {DemoMaterialModule} from './app.material.module';


// import {SnackbarLoadingService} from './snackbar.loading/snackbar.loading.service'
import { AddTodoComponentComponent } from './add-todo-component/add-todo-component.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// Uncomment to turn off animations
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { SnackbarInternalService } from './snackbar.loading/snackbar.internal.service';
import {SnackBarLoadingModule} from './snackbar.loading/snackbar.module';
@NgModule({
  declarations: [
    AppComponent,
    // SnackbarLoadingComponent,r
    // LoadingSnackBar,
    AddTodoComponentComponent
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    MatNativeDateModule,
    SnackBarLoadingModule
    // AppRoutingModule,
    
    /*NoopAnimationsModule | remove this comment to remove animation | */
  ],
  //entryComponents:[LoadingSnackBar],
  providers: [],
  // providers: [SnackbarInternalService],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);