function isInt(n) {
    return n % 1 === 0;
}  

export default function Card({ currencySymbol, product }) {
    return <div className="card">
        <h3>{product.name}</h3>
        <p>{product.sku}</p>
        <p className="price">{currencySymbol} {product.price}{isInt(product.price) ? ',-' : ''}</p>
        <style jsx>{`
            .card {
                box-shadow: 0 1px 8px 0 rgba(0,0,0,0.2);
                padding: 40px;
            }
            .price {
                font-size: 24px;
                font-weight: bold;
            }
        `}</style>
    </div>
}