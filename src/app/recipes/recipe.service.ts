import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>()

    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel', 'A super tasty Schnitzel!',
            'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 21)
            ]),
        new Recipe('Big Fat Burger', 'What else do you need?',
            'https://media1.s-nbcnews.com/j/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p_d9270c5c545b30ea094084c7f2342eb4.fit-760w.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ]),
    ]

    constructor(private shoppingListService: ShoppingListService){}

    getRecipes() {
        return this.recipes.slice()
    }

    addIngredientsToShoppingList(ingredients) {
        this.shoppingListService.addIngredients(ingredients)
    }

}