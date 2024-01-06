import { Component, OnInit } from '@angular/core';
import { Recipe, RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent{

	recipes: Recipe[] = [];
	
	constructor(
		private recipeService: RecipeService) {
			this.recipes = this.recipeService.recipes
		 }
}
