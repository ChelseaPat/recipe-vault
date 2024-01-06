import { Injectable } from '@angular/core';

export interface Recipe {
    id: string,
    title: string,
    description: string,
    ingredients: RecipetIngredient[],
    methods: RecipeMethod[]
}

export interface RecipetIngredient {
    amountOfMeasurement: number,
    measurement: RecipeMeasurementType,
    description: string
}

export interface RecipeMethod{
    description: string
}

type RecipeMeasurementType = 'TABLESPOON' | 'TEASPOON' | 'CUP';

type MeasurementLabels = {
    TABLESPOON: 'tbp',
    TEASPOON: 'tsp',
    CUP: 'cup',
};

@Injectable({
    providedIn: 'root'
})
export class RecipeService {   
    
    public recipes: Recipe[] = [];

    constructor() { 
        this.initialiseDemoRecipes()
    }

    initialiseDemoRecipes() {
        const recipe1: Recipe = {
            id: '1',
            title: 'Corn Fritters',
            description: 'Delicious wonderful corn fritters',
            ingredients: [
                {
                    amountOfMeasurement: 1.5,
                    measurement: 'CUP',
                    description: 'kernels (fresh, canned or thawed from frozen work equally well)'
                },
                {
                    amountOfMeasurement: 1 / 2,
                    measurement: 'CUP',
                    description: 'plain flour'
                },
                {
                    amountOfMeasurement: 1 / 2,
                    measurement: 'TABLESPOON',
                    description: 'sugar'
                }
            ],
            methods: [
                {
                    description: 'In a large bowl, stir the corn kernels, flour, sugar and baking powder together. Season with salt and pepper. Stir in the beaten egg and cream and combine.'
                },
                {
                    description: 'Coat the bottom of a frying pan with vegetable oil and place it over a medium-high heat. Place 2 Tablespoons of the corn batter into the pan and press lightly to create a flat, circular shape. Cook the fritters for 3 minutes, until beginning to brown underneath. Then flip them over and cook for an additional 3 minutes until golden brown and completely cooked through.'
                },
                {
                    description: 'Transfer the fritters to a plate and keep warm. Repeat the process with the remaining batter.'
                },
                {
                    description: 'In a separate frying pan, take the leftover streaky bacon, dice it and pan fry in a non-stick pan until fully cooked and crispy.'
                },
                {
                    description: 'Pile 4 fritters onto each plate. Top with a large tablespoon of sour cream. Garnish with red onion and chopped bacon pieces and drizzle a generous amount of sweet chilli sauce over each dish. Serve with a mesclun salad lightly dressed in balsamic dressing on the side.'
                },
            ]
        };

        const recipe2: Recipe = {
            id: '2',
            title: 'B Fritters',
            description: 'Delicious wonderful corn fritters',
            ingredients: [
                {
                    amountOfMeasurement: 1.5, 
                    measurement: 'CUP', 
                    description: 'kernels (fresh, canned or thawed from frozen work equally well)'
                },
                {
                    amountOfMeasurement: 1/2, 
                    measurement: 'CUP', 
                    description: 'plain flour'
                },
                {
                    amountOfMeasurement: 1/2, 
                    measurement: 'TABLESPOON', 
                    description: 'sugar'
                }
            ],
            methods: [
                {
                    description: 'In a large bowl, stir the corn kernels, flour, sugar and baking powder together. Season with salt and pepper. Stir in the beaten egg and cream and combine.'
                },
                {
                    description: 'Coat the bottom of a frying pan with vegetable oil and place it over a medium-high heat. Place 2 Tablespoons of the corn batter into the pan and press lightly to create a flat, circular shape. Cook the fritters for 3 minutes, until beginning to brown underneath. Then flip them over and cook for an additional 3 minutes until golden brown and completely cooked through.'
                },
                {
                    description: 'Transfer the fritters to a plate and keep warm. Repeat the process with the remaining batter.'
                },
                {
                    description: 'In a separate frying pan, take the leftover streaky bacon, dice it and pan fry in a non-stick pan until fully cooked and crispy.'
                },
                {
                    description: 'Pile 4 fritters onto each plate. Top with a large tablespoon of sour cream. Garnish with red onion and chopped bacon pieces and drizzle a generous amount of sweet chilli sauce over each dish. Serve with a mesclun salad lightly dressed in balsamic dressing on the side.'
                },
            ]
        };

        this.recipes = [...this.recipes, recipe1];

        this.recipes = [...this.recipes, recipe2];
    }
}
