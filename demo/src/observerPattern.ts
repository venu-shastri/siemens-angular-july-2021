class Subject{

    observers:any;
constructor(){
    this.observers=new Array<any>();
}
    subscibe(fun:any){

        this.observers.push(fun);
    }

    unsubScribe(fun:any){
        //
    }

    changeState(){
        this.notify();
    }
    notify(){
        
        for(let i=0;i<this.observers.length;i++){
            this.observers[i].apply(null);// this->null;
        }
    }
}

class ObsererOne{

    _subjetRef:Subject;
    constructor(_subject:Subject){
            this._subjetRef=_subject;
    }
    register(){
        this._subjetRef.subscibe(update);
        let _this=this;
        //observer logic
        function update(){
            console.log("Udate method recieved notification from subject");
            _this.doTask();// this->null;
        }
    }

   

    doTask(){

    }
}