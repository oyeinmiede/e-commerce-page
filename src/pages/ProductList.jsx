import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import { useState } from 'react'
import Searchbar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'
import SortSelect from '../components/SortSelect'
import ProductSkeleton from "../components/ProductSkeleton";
import { useEffect } from 'react'

const ProductList = () => {
    const [search, setSearch] = useState('')
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortBy, setSortBy] = useState("default");
    const [loading, setLoading] = useState(true)

    const filteredProducts = products.filter(product => {
        const matchesSearch =
            product.name
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchesCategory =
            selectedCategory === "All" ||
            product.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    const sortedProducts = [...filteredProducts]

    if (sortBy === 'low-high') {
        sortedProducts.sort(
            (a, b) => a.price - b.price
        )
    }

    if (sortBy === 'high-low') {
        sortedProducts.sort(
            (a, b) => b.price - a.price
        )
    }

    if (sortBy === 'a-z') {
        sortedProducts.sort((a, b) =>
            a.name.localeCompare(b.name)
        )
    }

    if (sortedProducts.length === 0) {
        return (
            <>
                <div className="actions">
                    <Searchbar search={search} setSearch={setSearch} />
                    <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                    <SortSelect sortBy={sortBy} setSortBy={setSortBy} />
                </div>

                <h2>
                    No products match your search.
                </h2>
            </>
        )
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className='page'>
            <div className="filters">
                <Searchbar search={search} setSearch={setSearch} />
                <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                <SortSelect sortBy={sortBy} setSortBy={setSortBy} />
            </div>

            <div className='products-grid'>
                {loading
                    ? Array.from({ length: 15 }).map((_, i) => (
                        <ProductSkeleton key={i} />
                    ))
                    : sortedProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </div>
        </div>

    )
}

export default ProductList
