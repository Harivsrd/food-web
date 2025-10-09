import './Header.css'
export function Header() {
    return (
        <div className="header">
            <div className="header-contents">
                <h2>Order your favourite food here</h2>
                <p>Choose a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your craving and elevate your dining experience, one delicious meal at a time.</p>
                <button><a href="#explore-menu">View menu</a></button>
            </div>
        </div>
    )
}