export default function ProductSkeleton() {
    return (
        <div className="product-card skeleton">
            <div className="skeleton-image" />
            <div className="skeleton-text short" />
            <div className="skeleton-text" />
            <div className="skeleton-text short" />
            <div className="skeleton-button" />
        </div>
    );
}