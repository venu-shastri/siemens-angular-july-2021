var Employee=(function(){

    /*class Empoyee{
         string name;

         getName(){return this.name;}

    }
    */
    function Employee(){
        this.name="";
    }
    Employee.prototype.get=function(){ return this.name;};
    return Employee;


})();

