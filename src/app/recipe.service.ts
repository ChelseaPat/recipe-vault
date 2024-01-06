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

type RecipeMeasurementType = 'TABLESPOON' | 'TEASPOON' | 'CUP' | 'GRAMS' | 'NONE';

type MeasurementLabels = {
    TABLESPOON: 'tbp',
    TEASPOON: 'tsp',
    CUP: 'cup',
    GRAMS: 'g',
    NONE: ''
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
            title: 'Cranberry and thyme stuffed pork chops',
            description: 'A twist on your traditional Christmas stuffed chicken, these cranberry and thyme stuffed pork chops are a must-try. Filled with festive flair, these pork chops are pockets full of fun that the whole whānau can enjoy. Serve with your favourite seasonal sides (we love blistered green beans and asparagus).',
            ingredients: [
                {
                    amountOfMeasurement: 6, 
                    measurement: 'NONE', 
                    description: 'slices of your favourite bread'
                },
                {
                    amountOfMeasurement: 80, 
                    measurement: 'GRAMS', 
                    description: 'butter'
                },
                {
                    amountOfMeasurement: 2, 
                    measurement: 'NONE', 
                    description: 'onions, diced'
                },
                {
                    amountOfMeasurement: 4, 
                    measurement: 'NONE', 
                    description: 'cloves garlic, minced'
                }
            ],
            methods: [
                {
                    description: 'Preheat your oven to 180°C fan bake. In a food processor, blend bread into coarse breadcrumbs.'
                },
                {
                    description: 'Melt two tablespoons of butter in a large frying pan over medium heat. Sauté the onion for a few minutes or until translucent.'
                },
                {
                    description: 'Stir in the garlic, thyme and the remaining butter. Cook until the butter melts, then add in the breadcrumbs and stir to combine. Toast for 5-10 minutes or until golden. Stir in the cranberries, season with salt and pepper and remove from the heat. Reserve half of the stuffing mixture.'
                },
                {
                    description: 'Using a sharp knife, cut a horizontal pocket into each pork chop. Stuff the pockets with the stuffing and secure them with toothpicks. Drizzle with olive oil and season with salt and pepper, then cook over medium-high heat in a large frying pan for 3-4 minutes on each side or until golden brown.'
                },
                {
                    description: 'Transfer to a lined baking tray and place in the oven to bake for 10-15 minutes or until cooked through. Remove toothpicks, then serve with the reserved stuffing.'
                },
            ]
        };

        this.recipes = [...this.recipes, recipe1];

        this.recipes = [...this.recipes, recipe2];
    }
}
