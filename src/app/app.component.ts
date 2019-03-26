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
    new Recipe('Salsa', ['Tomatoes', 'Onion', 'Cilantro', 'Limes'], 'Sample Instructions'),
    new Recipe('Mayo', ['3 eggs', 'Light Oil', 'Garlic', 'Lemon'], 'Sample Instructions'),
    new Recipe('PB&J', ['PB', 'Jelly', 'Sliced Bread'], 'Sample Instructions'),
    new Recipe('Empanadas', ['Ground Beef', 'Onions'], 'Sample Sample')
  ]
}
