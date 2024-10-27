// RecipeResults.jsx
import React from 'react';
import { HashLoader } from 'react-spinners';

const RecipeResults = ({ recipes, loading }) => {
  if (loading) {
    return (
      <div className="mt-8">
        <HashLoader color="#22c55e" size={50} />
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg mt-8">
      {recipes.length > 0 ? (
        recipes.map((recipe, index) => (
          <div key={index} className="bg-white p-4 rounded shadow-md mb-4">
            <h2 className="text-xl font-semibold text-green-700 mb-2">{recipe.title}</h2>
            <p className="text-gray-600 mb-4">Ingredients: {recipe.ingredients.join(", ")}</p>
            <p className="text-gray-600">Steps: {recipe.steps.join(", ")}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center mx-auto">No recipes found. Try a different search.</p>
      )}
    </div>
  );
};

export default RecipeResults;
