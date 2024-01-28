import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeService } from './recipe.service';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './core/button/button.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { FieldComponent } from './core/field/field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './core/header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        ButtonComponent,
        FieldComponent,
        HeaderComponent,
        HomeComponent,
        RecipeDetailsComponent,
        RecipeListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        AppRoutingModule,
        ReactiveFormsModule 
    ],
    providers: [RecipeService],
    bootstrap: [AppComponent]
})
export class AppModule { }
