import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'newtritionist-app-angular',
        appId: '1:427778759049:web:85c1f4d118ca80fe81a958',
        storageBucket: 'newtritionist-app-angular.firebasestorage.app',
        apiKey: 'AIzaSyApeHp8f3VbMir4QeabWv-tBG8gbPjh6-0',
        authDomain: 'newtritionist-app-angular.firebaseapp.com',
        messagingSenderId: '427778759049',
        measurementId: 'G-9T4ZYPKPDK',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
