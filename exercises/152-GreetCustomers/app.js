var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(customerData, firstName) {

  // your code here
  // 0 / 1/ >1
  // customerData: obj안의 obj
// customerData가 오브젝트고 안의 이름자체가 키니까 있는지 검색하는 if문 써주면 됨

  let greeting = '';

  if (!customerData[firstName]){
    return greeting = 'Welcome! Is this your first time?';
  }
    else if (customerData[firstName]["visits"] === 1){
      return greeting = 'Welcome back, ' + firstName + '! We\'re glad you liked us the first time!';
    }
    else if (customerData[firstName]["visits"] > 1){
      return greeting = 'Welcome back, ' + firstName + '! So glad to see you again!';
  
    }








//attp1
  // for (let name in customerData){
  //   for (let visitNum in name){
  //     if (visitNum === 1){
  //       return 'Welcome! Is this your first time?';
  //     }
  //     else if (visitNum === 2){
  //       return 'Welcome back, ' + firstName + '! We\'re glad you liked us the first time!';
  //     }
  //     else if (visitNum > 2){
  //       return 'Welcome back, ' + fisrtName + '! So glad to see you again!';
  //     }
  //   }
  // }
  

  

}
