import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

// My Components

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ComplaintsComponent } from './pages/complaints/complaints.component';
import { ComplaintsTableComponent } from './pages/complaints/complaints-table/complaints-table.component';

// STORE
import { StoreModule, provideStore } from '@ngrx/store';
import { reducers, metaReducers, effects } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { ComplaintsEffects } from './store/complaints/complaints.effects';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ComplaintsComponent,
    HomeComponent,
    AboutComponent,
    ComplaintsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // Material-Components
    MatButtonModule,
    MatInputModule,
    MatCardModule,

    // STORE
    StoreModule.forRoot({}, {}),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreModule.forFeature('complaints', reducers.complaints),
    EffectsModule.forRoot(),
    EffectsModule.forFeature([ComplaintsEffects]),
    // isDevMode() ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideStore(),
    provideEffects([ComplaintsEffects])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
