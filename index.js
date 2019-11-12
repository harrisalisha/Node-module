var rect = require('./rectangle');

/*function solveRect(l,b){
    console.log("Solving rectangle"+l+ "and"+ b)

    if(l <=0 || b <= 0){
        console.log("rectangle dimensions should be greater then Zero")
    }else{
        console.log("Rectangle is converted")
    }
}*/

function solveRect(l, b){
    console.log("Solving for rectangle with l ="+l+ "and b ="+b);
    rect(l, b, (err, rectangle)=> {
        if(err){
            console.log("ERROR:", err.message);
        }else{
            console.log("The area of the rectangle of dimensions l ="+l+" and b"+b+ " is"+ rectangle.area());
            console.log("The Perimeter ofThe rectangle of dimensions l=" +l+" and b "+ b+ " is"+ rectangle.perimeter());
        }

    });
    console.log("This statement after the call to rect()");
};

solveRect(2,4);
solveRect(2,5);
solveRect(0,5);