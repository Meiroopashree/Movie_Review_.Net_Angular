import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe.model';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private apiUrl = "https://8080-bfdeeddcedfabcfacbdcbaeadbebabcdebdca.premiumproject.examly.io/";

  constructor(private http: HttpClient) { }

  addRecipe(Recipe: Recipe): Observable<Recipe>
  {
    return this.http.post<Recipe>(`${this.apiUrl}api/Recipe`, Recipe);
  }

  getRecipes(): Observable<Recipe[]>
  {
    return this.http.get<Recipe[]>(`${this.apiUrl}api/Recipe`);
  }
}