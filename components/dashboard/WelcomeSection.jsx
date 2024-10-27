function WelcomeSection({ username }) {
  return (
    <section className="bg-green-100 p-6 rounded-md shadow-md mb-6">
      <h2 className="text-2xl font-semibold text-green-900">
        Welcome back, {username}!
      </h2>
      <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700">
        Create New Recipe
      </button>
    </section>
  );
}

export default WelcomeSection;
