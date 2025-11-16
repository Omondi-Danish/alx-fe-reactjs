import { useRecipeStore } from '../stores/recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    // After deleting, navigate back to the homepage
    navigate('/');
  };

  return (
    <button
      onClick={handleDelete}
      style={{ marginTop: '1rem', color: 'red' }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
