import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  addRecipe: (newRecipe) =>
    set((state) => {
      const recipes = [...state.recipes, newRecipe];
      const filteredRecipes =
        state.searchTerm.trim().length > 0
          ? recipes.filter((r) =>
              r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
            )
          : [];
      return { recipes, filteredRecipes };
    }),
  setRecipes: (recipes) => set({ recipes }),
  deleteRecipe: (id) =>
    set((state) => {
      const recipes = state.recipes.filter((recipe) => recipe.id !== id);
      const filteredRecipes = state.filteredRecipes.filter(
        (recipe) => recipe.id !== id
      );
      return { recipes, filteredRecipes };
    }),
  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const recipes = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      const filteredRecipes = state.filteredRecipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      return { recipes, filteredRecipes };
    }),
  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return { searchTerm: term, filteredRecipes: filtered };
    }),
}));
