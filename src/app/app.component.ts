import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title: string = 'Recipe Box';
  recipes: Recipe[] = [
    new Recipe('Salsa', ['Tomatoes', 'Onion', 'Cilantro', 'Limes'], 'Sample Instructions', 3),
    new Recipe('Mayo', ['3 eggs', 'Light Oil', 'Garlic', 'Lemon'], 'Sample Instructions', 2),
    new Recipe('PB&J', ['PB', 'Jelly', 'Sliced Bread'], 'Sample Instructions', 1),
    new Recipe('Empanadas', ['Ground Beef', 'Onions'], 'Sample Sample', 3)
  ]
  selectedRecipe = null;
  updateInstructions(clickedRecipe){
    this.selectedRecipe = clickedRecipe;
  }
  recipeColor(currentRecipe){
    if (parseInt(currentRecipe.difficulty) === 3){
      return 'bg-danger';
    } else if (parseInt(currentRecipe.difficulty) === 2){
      return 'bg-warning';
    } else {
      return 'bg-info';
    }
  }
  finishEditing() {
    this.selectedRecipe = null;
  }
}
