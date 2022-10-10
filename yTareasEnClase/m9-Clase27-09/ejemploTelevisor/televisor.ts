class Televisor{

    protected canalActual:number;
    protected volumenActual:number;
    protected estaPendido:boolean;

        public constructor(){
                this.canalActual = 0;
                this.volumenActual = 0;
                this.estaPendido = false;
        }

    public getCanalActual():number{
        return this.canalActual;
    }
    public setCanalActual(paramCanal:number):void{
        this.canalActual = paramCanal;
    }

    public getVolumenActual():number{
        return this.volumenActual;
    }
    public setVolumenActual(paramVolumen:number):void{
        this.volumenActual = paramVolumen;
    }

    public prenderApagar():void{
        if(this.estaPendido===true){
            this.estaPendido=false;
        }else{
            this.estaPendido = true;
        }
    }
}


class SmartTv extends Televisor{

    private navegarPorInternet:boolean;
    private cantAplicaciones:number;

    constructor(){
        super();
        this.canalActual = 5;
        this.navegarPorInternet=false;
        this.cantAplicaciones =5;
    }

    public navegar():void{
        if(this.navegarPorInternet===false){
            this.navegarPorInternet = true;
        }else{
            this.navegarPorInternet = false;
        }
    }

    public getVolumenActual(): number {
        return 1;        
    }

}

let smart1:SmartTv = new SmartTv();
let televisorComun:Televisor = new Televisor();



console.log(smart1.getVolumenActual());

smart1.setCanalActual(45);