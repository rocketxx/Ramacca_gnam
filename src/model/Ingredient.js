export class Ingredient {
    constructor(category, description, id, title) {
      this.category = category;
      this.description = description;
      this.id = id;
      this.title = title;
    }   

//USAGE: const newItem = Ingredient.mapFromJson(json);
      // Metodo statico per deserializzare un oggetto JSON in un'istanza di Ingredient
  static mapFromJson(json) {
    return new Ingredient(json.category, json.description, json.id, json.title);
  }
  }