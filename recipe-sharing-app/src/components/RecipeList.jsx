import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const recipes = useRecipeStore((state) => state.recipes);
  const listToShow =
    filteredRecipes && filteredRecipes.length > 0 ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipes</h2>
      {listToShow.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        listToShow.map((recipe) => (
          <div key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
