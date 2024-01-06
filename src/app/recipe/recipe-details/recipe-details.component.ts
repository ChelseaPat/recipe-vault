import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe, RecipeService } from 'src/app/recipe.service';

@Component({
  	selector: 'app-recipe-details',
  	templateUrl: './recipe-details.component.html',
  	styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

	id: string = '';
	recipe: Recipe = null;

  	constructor(
		private route: ActivatedRoute,
		private recipeService: RecipeService) {}

  	ngOnInit (): void {
    	this.id = this.route.snapshot.paramMap.get('id');
		this.recipe = this.recipeService.getRecipeById(this.id);
  	}


}
