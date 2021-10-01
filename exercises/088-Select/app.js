// Write your function here
function select(arr, obj){

   

    for (var key in arr) {                    

        console.log(arr[key]);
        for (var key2 in obj){
            console.log(key2);
            if(arr[key] != key2){

                delete obj[key2]

            }
        }
        
    
    }

    return obj;



}

var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output);