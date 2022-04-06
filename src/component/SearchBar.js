const SearchBar = ({ setQuery, setLicence, setOpenData }) => {

    return (
        <section className="searchEngine container flex wrap row">
            <div>
                <input type="text" placeholder="Recherchez un produit par mot-cle, par exemple : traces d'apprentissage" 
                onChange={e => setQuery(e.target.value.toLowerCase())} />
            </div>
            <div>
                <select name="open" id="open" onChange={e => setOpenData(e.target.value)}>
                    <option value="">Données ouvertes</option>
                    <option value="non">Oui</option>
                    <option value="oui">Non</option>             
                </select>
            </div>
            <div>
                <select name="licence" id="licence" onChange={e => setLicence(e.target.value)}>
                    <option value="">Type de licence</option>
                    <option value="Apache 2.0">Apache 2.0</option>
                    <option value="MIT">MIT</option>
                    <option value="GPL 3.0">GPL 3.0</option>
                    <option value="Licence Ouverte v2.0 (Etatlab)">Licence Ouverte v2.0 (Etatlab)</option>
                </select>
            </div>
        </section>
    )
}

export default SearchBar;