import { Injectable } from '@angular/core';
import { delay, lastValueFrom, of } from 'rxjs';
import { MenuItem, MenuItemMetadata, MenuItemTypeEnum } from '../modules/menu-item';
import { shuffleArray } from '../utils/array-functions';
import { getRandomNumberBetween, uuidv4 } from '../utils/common-functions';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  #appetizers: MenuItem[];
  #mainCourses: MenuItem[];
  #desserts: MenuItem[];
  #chefsSpecials: MenuItem[];
  #restaurantHistory: string;
  #menuItemsMetadata: Record<string, MenuItemMetadata> = {};
  #menuItemImageUrls = [
    'https://images.deliveryhero.io/image/fd-ph/LH/kfqo-hero.jpg',
    'https://static.toiimg.com/photo/88625308/88625308.jpg?v=3',
    'https://icebreakerideas.com/wp-content/uploads/2020/09/Food-Trivia-e1609813180214.jpg',
  ];

  constructor() {
    const ingredients = Array.from({ length: 6 }, (_, i: number) => `Ingredient number ${i + 1}`);

    this.#appetizers = Array.from({ length: 6 }, (_, i: number) => {
      const id = uuidv4();

      this.#menuItemsMetadata[id] = new MenuItemMetadata(
        ingredients,
        this.#menuItemImageUrls[i % this.#menuItemImageUrls.length],
      );

      return new MenuItem(
        id,
        `ProQuo Appetizer ${id}`,
        `This is the description for the ${id} appetizer`,
        MenuItemTypeEnum.APPETIZER,
        getRandomNumberBetween(10, 50),
      );
    });

    this.#mainCourses = Array.from({ length: 13 }, (_, i: number) => {
      const id = uuidv4();

      this.#menuItemsMetadata[id] = new MenuItemMetadata(
        ingredients,
        this.#menuItemImageUrls[i % this.#menuItemImageUrls.length],
      );

      return new MenuItem(
        id,
        `ProQuo Main Course ${id}`,
        `This is the description for the ${id} main course`,
        MenuItemTypeEnum.MAIN_COURSE,
        getRandomNumberBetween(80, 200),
      );
    });

    this.#desserts = Array.from({ length: 5 }, (_, i: number) => {
      const id = uuidv4();

      this.#menuItemsMetadata[id] = new MenuItemMetadata(
        ingredients,
        this.#menuItemImageUrls[i % this.#menuItemImageUrls.length],
      );

      return new MenuItem(
        id,
        `ProQuo Dessert ${id}`,
        `This is the description for the ${id} dessert`,
        MenuItemTypeEnum.DESSERT,
        getRandomNumberBetween(50, 90),
      );
    });

    this.#chefsSpecials = Array.from({ length: 4 }, (_, i: number) => {
      const id = uuidv4();

      this.#menuItemsMetadata[id] = new MenuItemMetadata(
        ingredients,
        this.#menuItemImageUrls[i % this.#menuItemImageUrls.length],
      );

      return new MenuItem(
        id,
        `ProQuo Chef's Special ${id}`,
        `This is the description for the ${id} chef's special`,
        MenuItemTypeEnum.CHEFS_SPECIAL,
        getRandomNumberBetween(10, 50),
      );
    });

    this.#restaurantHistory = `Way back in the old 1900s, we decided to up a ProQuo family restaurant to cater for employee's specific dietary reauirements. Now we employ 2 quntillion stage members and are making phat cash. Peace out`;
  }

  /**
   *
   * @returns All menu items, exluding the chef's specials
   */
  fetchMenuItems(): Promise<MenuItem[]> {
    const serverDelay = getRandomNumberBetween(1000, 2000);
    const serverDown = getRandomNumberBetween(0, 100) > 95;

    if (serverDown) {
      return Promise.reject({
        code: 1234,
        message: 'The server is currently unreachable',
      });
    }

    return lastValueFrom(
      of(shuffleArray([...this.#appetizers, ...this.#mainCourses, ...this.#desserts])).pipe(delay(serverDelay)),
    );
  }

  /**
   *
   * @returns Menu items corresponding to the chef's specials
   */
  fetchChefsSpecials(): Promise<MenuItem[]> {
    const serverDelay = getRandomNumberBetween(1000, 2000);

    return lastValueFrom(of(this.#chefsSpecials).pipe(delay(serverDelay)));
  }

  /**
   *
   * @param menuItemId
   * @returns Metadata for the menu item with the corresponding menuItemId
   */
  fetchMenuItemMetadata(menuItemId: string): Promise<MenuItemMetadata> {
    const serverDelay = getRandomNumberBetween(1000, 2000);

    const ingredients = Array.from({ length: 6 }, (_, i: number) => `Ingredient number ${i + 1}`);

    return lastValueFrom(of(new MenuItemMetadata(ingredients)).pipe(delay(serverDelay)));
  }

  /**
   * This is just a "back in 1900s we opened, and blah blah"
   */
  fetchRestaurantHistory(): Promise<string> {
    const serverDelay = getRandomNumberBetween(1000, 2000);

    return lastValueFrom(of(this.#restaurantHistory).pipe(delay(serverDelay)));
  }
}
