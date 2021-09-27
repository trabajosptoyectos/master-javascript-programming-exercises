function isOldEnoughToDrink(age){
    // your code here
    
    if(parseInt(age) >= 21){

        return true;

    }
    else{

        return false;

    }
}

var output = isOldEnoughToDrink(22);
console.log(output);

