import { Injectable } from '@angular/core';
export interface PeriodicElement {
  title: string;
  description: string;
  location: string;
  date: string;
  price: string;
  availableSeatNo: number;
}

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  ELEMENT_DATA: PeriodicElement[] = [
    {
      title: 'Goa Tour',
      description: 'Holiday for 2 nights',
      location: 'Goa',
      date: '22/12/2025',
      price: '12000',
      availableSeatNo: 2,
    },
    {
      title: 'Bali Tour',
      description: 'Holiday for 1 nights',
      location: 'Bali',
      date: '22/12/2025',
      price: '12000',
      availableSeatNo: 3,
    },
    {
      title: 'Kashmir Tour',
      description: 'Holiday for 4 nights',
      location: 'Kashmir',
      date: '22/12/2025',
      price: '12000',
      availableSeatNo: 12,
    },
    {
      title: 'Kanyakumari Tour',
      description: 'Holiday for 5 nights',
      location: 'Kanyakumari',
      date: '22/12/2025',
      price: '12000',
      availableSeatNo: 32,
    },
    {
      title: 'Kashi Tour',
      description: 'Holiday for 1 nights',
      location: 'Kashi',
      date: '22/12/2025',
      price: '12000',
      availableSeatNo: 23,
    },
    {
      title: 'Astvinayak Tour',
      description: 'Holiday for 9 nights',
      location: 'Ashtavinayak',
      date: '22/12/2025',
      price: '12000',
      availableSeatNo: 54,
    },
    {
      title: 'Dubai Tour',
      description: 'Holiday for 3 nights',
      location: 'Dubai',
      date: '22/12/2025',
      price: '12000',
      availableSeatNo: 21,
    },
    {
      title: 'Atartica Tour',
      description: 'Holiday for 2 nights',
      location: 'Antartica',
      date: '22/12/2025',
      price: '12000',
      availableSeatNo: 43,
    },
    {
      title: 'Russia Tour',
      description: 'Holiday for 3 nights',
      location: 'Russia',
      date: '22/12/2025',
      price: '12000',
      availableSeatNo: 5,
    },
    {
      title: 'Israel Tour',
      description: 'Holiday for 5 nights',
      location: 'Israel',
      date: '22/12/2025',
      price: '12000',
      availableSeatNo: 2,
    },
  ];
  constructor() {}
}
