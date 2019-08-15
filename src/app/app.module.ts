
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Angular material 
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
import {DemoMaterialModule} from './app.material.module';


// Uncomment to turn off animations
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    
    DemoMaterialModule,
    MatNativeDateModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
    /*NoopAnimationsModule | remove this comment to remove animaiton | */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// platformBrowserDynamic().bootstrapModule(AppModule);