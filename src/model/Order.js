export class Order {
    constructor(idRestaurants, baseId, quantity, ingredients) {
      this.idRestaurants = idRestaurants;
      this.baseId = baseId;
      this.quantity = quantity;
      this.ingredients = ingredients; //TODO: è un array di Ingredient. rendilo tale
    }
  }
//usage
//   const newItem = new Order(1, 1, 2, [ingredient1, ingredient2]);