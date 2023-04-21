export class MenuItem {
  id: string;
  name: string;
  description: string;
  type: string;
  price: number;

  constructor(id: string, name: string, description: string, type: string, price: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.type = type;
    this.price = price;
  }
}

export class MenuItemMetadata {
  ingredients: string[];
  imageUrl: string;

  constructor(ingredients: string[], imageUrl: string) {
    this.ingredients = ingredients;
    this.imageUrl = imageUrl;
  }
}

export enum MenuItemTypeEnum {
  APPETIZER = 'A',
  MAIN_COURSE = 'M',
  DESSERT = 'D',
  CHEFS_SPECIAL = 'CS',
}
