import { Vertebrado } from './Vertebrado';

export class Mamifero extends Vertebrado {
    private _TipoAlimentacion:String;
    private _TipoMovimiento:String;
  
    /************************************************************************************
     * Funcion:     Constructor
     * Parametros:  pNombre: String, 
     *              pSonido: String, 
     *              pTipo_esqueleto: String, 
     *              pCantidad_extremidades: Number
     * Descripcion: Crea un objeto de tipo vertebrado con los valores que vienen por parametro
     * Return:      N/A
     ************************************************************************************/
    constructor(pNombre: String, pSonido: String, pTipo_esqueleto: String, pCantidad_extremidades: Number,
                pAlimentacion: String, pMovimiento: String) {
        super(pNombre, pSonido, pTipo_esqueleto, pCantidad_extremidades);
        this.TipoAlimentacion = pAlimentacion;
        this.TipoMovimiento = pMovimiento;
    }

    /************************************************************************************
     * Funcion:     Set TipoAlimentacion
     * Parametros:  val: String
     * Descripcion: Agrega el valor a la variable _TipoAlimentacion
     * Return:      N/A
     ************************************************************************************/
    set TipoAlimentacion(val: String){
        this._TipoAlimentacion = val;
    }

    /************************************************************************************
     * Funcion:      Get TipoAlimentacion
     * Parametros:   N/A
     * Descripcion:  devuelve el valor a la variable _TipoAlimentacion
     * Return:       TipoAlimentación: String
     ************************************************************************************/
    get TipoAlimentacion(): String{
        return this._TipoAlimentacion;
    }
    
    /************************************************************************************
     * Funcion:     Set TipoMovimiento
     * Parametros:  val: String
     * Descripcion: Agrega el valor a la variable _TipoMovimiento
     * Return:      N/A
     ************************************************************************************/
    set TipoMovimiento(val: String){
        this._TipoMovimiento = val;
    }

    /************************************************************************************
     * Funcion:     Set TipoMovimiento
     * Parametros:  val: String
     * Descripcion: Agrega el valor a la variable _TipoMovimiento
     * Return:      N/A
     ************************************************************************************/
    get TipoMovimiento(): String{
        return this._TipoMovimiento;
    }

    /************************************************************************************
     * Funcion:     get TipoAlimentacion
     * Parametros:  N/A
     * Descripcion: Devuelve el valor en la variable _TipoAlimentacion, con formato.
     * Return:      Valor de la variable con formato
     ************************************************************************************/
    Alimentacion(){ 
        return  "Nuestro " + this.Nombre.toLowerCase() + " es "+ this.TipoAlimentacion; 
    }

    /************************************************************************************
     * Funcion:     Comunicacion
     * Parametros:  N/A
     * Descripcion: Obtiene el valor de la variable Sonido guardada en el padre
     * Return:      Valor de la variable con formato
     ************************************************************************************/
    Comunicacion(){ 
        return "El sonido del " + this.Nombre.toLowerCase() + " que emite es: " + this.Sonido; 
    }

    /************************************************************************************
     * Funcion:     get TipoMovimiento
     * Parametros:  N/A
     * Descripcion: Devuelve el valor en la variable _TipoMovimiento, con formato.
     * Return:      Valor de la variable con formato
     ************************************************************************************/
    Movimiento(){ 
        return "El movimiento del " + this.Nombre.toLowerCase()  + " es: " + this.TipoMovimiento;  
    }

    /************************************************************************************
     * Funcion:     sumary
     * Parametros:  n/a
     * Descripcion: muestra un texto con los valores de nuestras clases. Llama a su padre
     * Return:      String con los datos del animal
     ************************************************************************************/
    sumary(){
        let mSuperMessage = super.summary();
        return mSuperMessage + ". " + this.Alimentacion() + this.Comunicacion() + this.Movimiento();
    }
}