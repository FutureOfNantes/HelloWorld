import { useState } from "react";
import { useSelector } from "react-redux";

const SearchBar = ({ setQuery, setLicence }) => {

    return (
        <section className="searchEngine container flex wrap row">
            <div>
                <input type="text" placeholder="Recherchez un produit par mot-cle, par exemple : traces d'apprentissage" 
                onChange={e => setQuery(e.target.value.toLowerCase())} />
            </div>
            {/* <div>
                <select name="" id="">
                    <option value="">Type de produit</option>
                </select>
            </div> */}
            <div>
                <select name="licence" id="licence" onChange={e => setLicence(e.target.value)}>
                    <option value="" selected disabled>Type de licence</option>
                    <option value="Apache 2.0">Apache 2.0</option>
                    <option value="MIT">MIT</option>
                    <option value="GPL 3.0">GPL 3.0</option>

                </select>
            </div>
        </section>
    )
}

export default SearchBar;