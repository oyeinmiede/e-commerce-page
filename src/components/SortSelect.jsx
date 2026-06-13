export default function SortSelect({ sortBy, setSortBy }) {
    return (
        <select
            value={sortBy}
            onChange={(e) =>
                setSortBy(e.target.value)
            }
        >
            <option value="default">
                Default
            </option>

            <option value="low-high">
                Price Low-High
            </option>

            <option value="high-low">
                Price High-Low
            </option>

            <option value="a-z">
                Name A-Z
            </option>
        </select>
    )
}