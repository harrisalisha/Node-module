var rect = {
    perimeter : (x,y) => (2*(X+y)),
    area: (x,y) => (x*y)
};

function solveRect(l,b){
    console.log("Solving rectangle"+l+ "and"+ b)

    if(l <=0 || b <= 0){
        console.log("rectangle dimensions should be greater then Zero")
    }else{
        console.log("Rectangle is converted")
    }
}

solveRect(2,4);
solveRect(2,5);
solveRect(0,5);