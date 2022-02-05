import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, Subject } from "rxjs";
import { environment } from "@env/environment";
import { Item } from "../interfaces/item.interface";

@Injectable({ providedIn: 'root' })
export class GalleryService {
  items: Item[] = [
    {
      _id: '01',
      title: 'Hola',
      description: 'des',
      imageUrl:
        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      _id: '01',
      title: 'Hola',
      description: 'des',
      imageUrl:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },

    {
      _id: '01',
      title: 'Hola',
      description: 'des',
      imageUrl:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
  ];
  public items$!: Observable<Item[]>;

  constructor(private readonly http: HttpClient) {
    this.getItems();
  }

  public addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(`${environment.API_URL}/gallery/item`, item);
  }

  public getItemById(id: string): Observable<Item> {
    return this.http.get<Item>(`${environment.API_URL}/gallery/item/${id}`);
  }

  public deleteItemById(id: string): Observable<Item> {
    return this.http.get<Item>(`${environment.API_URL}/gallery/item/${id}`);
  }

  private getItems(): Observable<Item[]> {
    // return this.items$ = this.http.get<Item[]>(`${environment.API_URL}/gallery/item`);
    return this.items$ = of(this.items);
  }
}
