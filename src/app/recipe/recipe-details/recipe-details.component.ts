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
	editMode = false;

	MeasurementLabels = this.recipeService.MeasurementLabels;

    constructor(
		private route: ActivatedRoute,
		private recipeService: RecipeService) {}

    ngOnInit (): void {
        this.id = this.route.snapshot.paramMap.get('id');
		this.recipe = this.recipeService.getRecipeById(this.id);

		this.editMode = this.id === 'new';
    }

	startEditMode(): void {
		this.editMode = true;
	}

	endEditMode(): void {
		this.editMode = false;
	}

	onValueChange(value: string) {
		console.log('Value changed:', value);
    }
}
