import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

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
      const favorites = state.favorites.filter((favId) => favId !== id);
      return { recipes, filteredRecipes, favorites };
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

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) =>
          state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));
