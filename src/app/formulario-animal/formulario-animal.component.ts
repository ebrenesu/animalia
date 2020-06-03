import { Component, OnInit } from '@angular/core';
import { SerAnimaliaService } from './../ser-animalia.service';
import { ReinoAnimal } from './../complexObjects/ReinoAnimal';
import { Vertebrado } from '../complexObjects/Vertebrado';
import {VTaxonomia} from '../complexObjects/Vertebrado';
import {ITaxonomia} from '../complexObjects/Invertebrado';
import { NgForm } from '@angular/forms';
import { Mamifero } from '../complexObjects/Mamifero';
import { Router } from '@angular/router';

@Component({
  selector: 'formulario-animal',
  templateUrl: './formulario-animal.component.html',
  styleUrls: ['./formulario-animal.component.scss']
})
export class FormularioAnimalComponent implements OnInit {

  taxonomiaOptions=[];
  seleccionadoTaxonomia: String = "";
  seleccionadoCategoria: String = "Vertebrado";

  constructor(private animalService:SerAnimaliaService, private router:Router){}

  ngOnInit() {
    this.cargarTaxonomia(this.seleccionadoCategoria);
  }

  cargarTaxonomia(pVal: String){
    let mTaxonomia=[];

    switch(pVal) {
      case "Vertebrado":
        mTaxonomia = Object.keys(VTaxonomia).filter(k => typeof VTaxonomia[k as any] === "number");
      break;
      
      case "Invertebrado":
        mTaxonomia = Object.keys(ITaxonomia).filter(k => typeof ITaxonomia[k as any] === "number");
      break;

      default:
        // code block
    }

    this.setListaTaxinomia(mTaxonomia);
  }

  setListaTaxinomia(pKey: any){;
    this.taxonomiaOptions=[];
    var self = this;
    pKey.forEach(function (value) {
      value = self.toProperCase(value);
      
      self.taxonomiaOptions.push({"option": value, 
                                  "value": value.toLowerCase()});
    }); 
    this.seleccionadoTaxonomia = this.taxonomiaOptions[0].option;
    
  }

  toProperCase(str: any): String {
    return str.split(' ')
          .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
          .join(' ');
  };

  crearAnimal(f: NgForm){
    let mAnimal:ReinoAnimal = this.getNewAnimal(f);
    this.animalService.addAnimal(mAnimal);
    this.router.navigate(['/']);
  }

  private getNewAnimal(f: NgForm){
    let arrAnimal = f.value;
    let mEsqueleto = arrAnimal.sbCaracteristica=="Vertebrado"?"Interno":"Externo";
    
    switch(arrAnimal.mTaxonomy) {
      case "Mamiferos":
        return  new Mamifero(arrAnimal.txtNombreAnimal,arrAnimal.txtSonido,mEsqueleto,
                            arrAnimal.txtExtremidades,arrAnimal.txtAlimentacion,arrAnimal.txtMovimiento);
      break;
      


      default:
        // code block
    }
  }



}