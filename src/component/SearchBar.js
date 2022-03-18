import { useSelector } from "react-redux";

const SearchBar = () => {
    return (
        <section className="searchEngine container flex wrap row">
            <div>
                <input type="text" placeholder="Recherchez un produit par mot-cle, par exemple : traces d'apprentissage" />
            </div>
            <div>
                <select name="" id="">
                    <option value="">Type de produit</option>
                </select>
            </div>
            <div>
                <select name="" id="">
                    <option value="">Type de licence</option>
                </select>
            </div>
        </section>
    )
}

export default SearchBar;