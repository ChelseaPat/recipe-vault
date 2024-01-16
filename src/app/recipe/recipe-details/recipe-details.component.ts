import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditModeService, EditSession } from 'src/app/common/edit-mode.service';
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
    editSession: EditSession = null;

	MeasurementLabels = this.recipeService.MeasurementLabels;

    constructor(
        public router: Router,
		private route: ActivatedRoute,
		private recipeService: RecipeService,
        private editModeService: EditModeService) {}

    ngOnInit (): void {
        this.id = this.route.snapshot.paramMap.get('id');
		this.recipe = JSON.parse(JSON.stringify(this.recipeService.getRecipeById(this.id)));

		this.editMode = this.id === 'new';

        this.editSession = {
            docId: this.id,
            docType: 'RECIPE' 
        };

        const boiii = this.editModeService.isAnEditSessionInProgress(this.editSession);
        console.log('boi', boiii);
    }

	startEditMode(): void {
        // this.editModeService.addAnEditSession(this.editSession);
        this.editMode = true;
	}

    cancelEditMode(): void {
        this.endEditMode();
        const currentUrl = this.router.url;
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate([currentUrl]);
        });
    }

	endEditMode(): void {
		// this.editModeService.removeAnEditSession(this.editSession);
        this.editMode = false;
	}

	onValueChange(value: string) {
		console.log('Value changed:', value);
    }
}
