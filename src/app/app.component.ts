import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  collection,
  collectionData,
  DocumentData,
  Firestore,
  getDoc,
} from '@angular/fire/firestore';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

interface Item {
  name: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul>
      @for (item of (item$ | async); track item) {
      <li>
        {{ item['name'] }}
      </li>
      }
    </ul>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'newtritionist-app-ng18';
  item$: Observable<DocumentData[]>;
  private firestore = inject(Firestore);

  constructor() {
    const itemCollection = collection(this.firestore, 'test');
    this.item$ = collectionData<DocumentData>(itemCollection);
  }
}
