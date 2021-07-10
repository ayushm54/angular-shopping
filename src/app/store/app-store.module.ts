import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './index';

@NgModule({
    imports: [
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument()
    ],
    exports: [],
    providers: [
    ]
})
export class AppStoreModule { }