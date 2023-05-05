import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardLivrosService {
   //Array para carrinho 
   itemsCarrinho :any[] = []
  constructor() { }
}
