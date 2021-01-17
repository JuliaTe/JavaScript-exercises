products = [
  { name: 'Sonoma', ingredients: ['artichoke', 'sundried tomatoes', 'mushrooms'], containsNuts: false },
  { name: 'Pizza Primavera', ingredients: ['roma', 'sundried tomatoes', 'goats cheese', 'rosemary'], containsNuts: false },
  { name: 'South Of The Border', ingredients: ['black beans', 'jalapenos', 'mushrooms'], containsNuts: false },
  { name: 'Blue Moon', ingredients: ['blue cheese', 'garlic', 'walnuts'], containsNuts: true },
  { name: 'Taste Of Athens', ingredients: ['spinach', 'kalamata olives', 'sesame seeds'], containsNuts: true }
];

var productsICanEat = [];

// nuts, mushrooms
products.filter(function(x) {
  if (!x.ingredients.includes('mushrooms') && x.containsNuts === false) {
    productsICanEat.push(x.name);
  }
  
});

console.log(productsICanEat)


