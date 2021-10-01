function calculateBillTotal(preTaxAndTipAmount) {
    var billTotal = preTaxAndTipAmount *0.15 + preTaxAndTipAmount*0.095 +preTaxAndTipAmount
    return billTotal
   }
   // #123
   function getStringLength(string) {
     var arr = string.split("");
     var count = 0;
     for(var i in arr){
         count++;
     }
     return count;
   } 
   function getStringLength(string) {
     var i = 0;
     while(string[i]){
         i++;
     }
     return i;
   }
var output = calculateBillTotal(20);
console.log(output); // --> 24.9