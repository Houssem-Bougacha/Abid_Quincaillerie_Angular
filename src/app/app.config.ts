import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), importProvidersFrom(provideFirebaseApp(() => initializeApp({ "projectId": "houssem-ahmed-projet", "appId": "1:639477670096:web:f1bdbc0898036b9334bed5", "storageBucket": "houssem-ahmed-projet.appspot.com", "apiKey": "AIzaSyCCa4ZTNJ8jd9cAtJwPzo65pOsHDfrytKI", "authDomain": "houssem-ahmed-projet.firebaseapp.com", "messagingSenderId": "639477670096" }))), importProvidersFrom(provideFirestore(() => getFirestore())), provideCharts(withDefaultRegisterables()),]
};
