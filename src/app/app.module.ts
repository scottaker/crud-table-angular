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
import { IncidentsComponent } from './pages/incidents/incidents.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { IncidentTableComponent } from './pages/incidents/incident-table/incident-table.component';

// STORE
import { StoreModule, provideStore } from '@ngrx/store';
import { reducers, metaReducers, effects } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { ComplaintsEffects } from './store/complaints/complaints.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IncidentsComponent,
    HomeComponent,
    AboutComponent,
    IncidentTableComponent
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

    EffectsModule.forRoot(),
    
    EffectsModule.forFeature([ComplaintsEffects]),
    // isDevMode() ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    provideStore(),
    provideEffects([ComplaintsEffects])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
