

// first task ( პირველი ფავალება )

function validation(a,b){
    if (typeof a === 'number', typeof b === 'number'){
        return a + b;
    }else{
        return "მატრიცაში მოხდა შეცდომა !!! error"
    }
}
 console.log(validation(10, 7));
 console.log(validation(10 , 'string'));




// second task ( მეორე დავალება )
function temperature(F){
    if (typeof F === 'string' ){
        return false;
    }else{
        return F - 32 * (5 / 9)
    }

}

console.log(temperature(10));
console.log(temperature('პარამეტრი არ არის რიცხვი'))



// third task ( მესამე დავალება )


function calculation(a,b,operation){
    if( typeof a !== 'number', typeof b !== 'number'){
        return false;
    }
    switch(operation) {
        case '+':
            return a + b;
        case'-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return false;
    }
    
}

console.log(calculation(5,6, '*'));
console.log(calculation(5,6, 'string'));