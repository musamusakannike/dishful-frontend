"use client"
import { useState } from "react";
import RecipeResults from "@/components/recipe-search/RecipeResults";
import RecipeSearchForm from "@/components/recipe-search/RecipeSearchForm";
import { toast } from "react-hot-toast";
import { apiRequest, getToken } from "@/lib/utils";

const RecipeSearchPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (mealName, additionalText) => {
    setLoading(true);
    setRecipes([]); // Clear any existing results
    const token = getToken();

    try {
      // Use apiRequest to fetch recipe data
      const data = await apiRequest(
        'recipe/text-recipe',
        'POST',
        { food: mealName, additionalText },
        token
      );

      setRecipes([data]);
      toast.success("Recipe found!");
    } catch (error) {
      toast.error(error.message || "An error occurred while searching for the recipe.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center px-4 py-8 bg-green-50 min-h-screen">
      <h1 className="text-2xl font-bold text-green-700 mb-4">
        Find Your Recipe
      </h1>
      <RecipeSearchForm onSearch={handleSearch} />
      <RecipeResults recipes={recipes} loading={loading} />
    </div>
  );
};

export default RecipeSearchPage;
