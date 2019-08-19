import { NgModule} from '@angular/core';
import {SnackbarLoadingComponent,LoadingSnackBar} from './snackbar.loading.component';
import { CommonModule } from '@angular/common';
import MatModules from './mat.module'
import {DemoMaterialModule} from '../app.material.module';

@NgModule({
    imports:[
        CommonModule,
        DemoMaterialModule
    ],
    declarations:[
        SnackbarLoadingComponent,
        LoadingSnackBar
    ],
    exports:[
        SnackbarLoadingComponent,
        LoadingSnackBar
    ],
    entryComponents:[LoadingSnackBar]
})
export class SnackBarLoadingModule {}

console.log(SnackBarLoadingModule);

console.log(SnackBarLoadingModule);