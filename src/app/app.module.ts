import { NgModule, isDevMode, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** --- MATERIAL --- */
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

//* --- My Components --- */

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ComplaintsComponent } from './pages/complaints/complaints.component';
import { ComplaintsTableComponent } from './pages/complaints/complaints-table/complaints-table.component';
// import { PagingComponent } from './components/paging/paging.component';


// STORE
import { StoreModule, provideStore } from '@ngrx/store';
import { reducers, metaReducers, effects } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { ComplaintsEffects } from './store/complaints/complaints.effects';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PagingComponent } from 'src/app/components/paging/paging.component';

@NgModule({
  declarations: [
    // layout
    AppComponent,
    HeaderComponent,

    // pages
    ComplaintsComponent,
    HomeComponent,
    AboutComponent,
    ComplaintsTableComponent,

    // components
    PagingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    // Material-Components
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatPaginatorModule,
    MatSlideToggleModule,

    // STORE
    StoreModule.forRoot({}, {}),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreModule.forFeature('complaints', reducers.complaints),
    EffectsModule.forRoot(),
    EffectsModule.forFeature([ComplaintsEffects]),
    // isDevMode() ? StoreDevtoolsModule.instrument() : [],
  ],
  exports: [
    MatPaginatorModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideStore(),
    provideEffects([ComplaintsEffects])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
