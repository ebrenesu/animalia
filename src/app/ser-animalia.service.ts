import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ReinoAnimal } from './complexObjects/ReinoAnimal';

@Injectable({
  providedIn: 'root'
})
export class SerAnimaliaService {
  private lstAnimales:ReinoAnimal[]=[];
  constructor() { }

  getListAnimals(): Observable<ReinoAnimal[]> {
    return of(this.lstAnimales);
  }

  addAnimal(pAnimal: ReinoAnimal){
    this.lstAnimales.push(pAnimal);
  }

  getAnimal(pKey: String){
    return this.lstAnimales.filter(item => item.Nombre === pKey)[0];
  }
}
