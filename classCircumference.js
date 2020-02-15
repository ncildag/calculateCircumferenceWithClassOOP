class Rectangle{

    constructor(plength1, plength2){
        this.length1=plength1
        this.length2=plength2
    }

    calculateArea(){
       return this.length1*this.length2; 
    }

    calculeteCircumference(){
        return 2*(this.length1+this.length2);
    }
}

let values = [
    new Rectangle(1,4),
    new Rectangle(2,4),
    new Rectangle(3,5)
];

console.log("total of circumference",
values.map(function(pRectangle){
    return pRectangle.calculeteCircumference();
})

);