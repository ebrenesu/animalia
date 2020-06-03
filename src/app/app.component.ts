import { Component } from '@angular/core';
import { Mamifero } from './complexObjects/Mamifero';
import { ReinoAnimal } from './complexObjects/ReinoAnimal';
import { SerAnimaliaService } from './ser-animalia.service';

@Component({
  selector: 'app-animalia',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  })
export class AppComponent {
  
  title = 'Animalia';
  animals : ReinoAnimal[];
  selected_animal ="";
  bProgramaSimple = false;
  
  constructor(private animalService:SerAnimaliaService){  }
  
  ngOnInit() {
    this.getAnimales_Servicio();
    this.actualizar_lista();
  }

  getAnimales_Servicio(): void {
    this.animalService.getListAnimals().subscribe(lstAnimales => this.animals = lstAnimales);
  }

  actualizar_lista(){
      this.crearAnimalCx(new Mamifero("Perro","ladra", "Interno", 4, "omnivoro", "en tierra"));
      this.crearAnimalCx(new Mamifero("Gato","maulla", "Interno", 4, "omnivoro", "en tierra"));
      this.crearAnimalCx(new Mamifero("Leon","ruge", "Interno", 4, "carnivoro", "en tierra"));
      this.crearAnimalCx(new Mamifero("Ornitorrinco","grazna", "Interno", 4, "carnivoro", "en tierra y en agua"));
  }

  seleccion(pAnim: any){
    this.selected_animal = pAnim;
  }

  cambiarVista(){
    this.bProgramaSimple = !this.bProgramaSimple;
    this.selected_animal = "";
    this.actualizar_lista();
    this.cambiarTitulo();
  }

  cambiarTitulo(){
    this.title = this.bProgramaSimple?"Animalia simple":"Animalia compleja";
  }

  crearAnimalCx(pAn: ReinoAnimal){
    this.animalService.addAnimal(pAn);
 }

  

}
