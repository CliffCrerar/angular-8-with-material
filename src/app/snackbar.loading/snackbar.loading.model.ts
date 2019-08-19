export class SnackBarLoadingModel {
    
    constructor(
        // Angular mandatory snackbar properties
        //   public announcementMessage?: string,
        public errorIcon?: string,
        public state?: SnackBarStateModel,
        public hasAction?: boolean,
        // Custom mandatory snackbar properties  
        public iconNames?: string[],
        public loadingIcon?: string,
        // Angular optional snackbar properties
        
    ) { }
}
export class SnackBarStateModel {
    constructor(
        public message?: string,
        public action?: string,
        public callCounter = 0,
        public handlingHttp: string[] = [],
        public reloadBtn=true,
        public spinningClass = 'spin-cw',
        public error = false
    ) { }
}