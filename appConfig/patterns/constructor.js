function Car(model, year, miles) {
    
    //sample properties
    this.model = model;
    this.year = year;
    this.miles = miles;
    
    //sample methods
    this.toString = function () {
        return this.model + " has done " + this.miles + " miles";
    };
}