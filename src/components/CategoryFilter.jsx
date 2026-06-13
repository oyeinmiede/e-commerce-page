export default function CategoryFilter({ selectedCategory, setSelectedCategory }) {
    const categories = [
        "All",
        "Clothing",
        "Shoes",
        "Accessories",
    ];

    return (
        <div className="categories">
            {categories.map(category => (
                <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "active" : ""}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}
