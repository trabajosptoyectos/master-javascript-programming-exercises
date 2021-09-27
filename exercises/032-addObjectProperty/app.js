function addObjectProperty(obj1, key, obj2) {
  // tu codigo aqui
  obj1[key] = obj2
  return obj1

}

person1 = addObjectProperty('Mr.Burns', 'manager', 'supervisor');
console.log(person1.manager); // --> { name: 'Mr.Burns', role: 'supervisor' }