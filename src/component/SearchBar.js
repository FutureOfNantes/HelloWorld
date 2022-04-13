const SearchBar = ({ setQuery, setLicence, setOpenData, t }) => {

    return (
        <section className="searchEngine container flex wrap row">
            <div>
                <input type="text" placeholder={t('Recherchez un produit')}
                    onChange={e => setQuery(e.target.value.toLowerCase())} />
            </div>
            <div>
                <select name="open" id="open" onChange={e => setOpenData(e.target.value)}>
                    <option value="">{t('Données ouvertes')}</option>
                    <option value="non">{t('Oui')}</option>
                    <option value="oui">{t('Non')}</option>
                </select>
            </div>
            <div>
                <select name="licence" id="licence" onChange={e => setLicence(e.target.value)}>
                    <option value="">{t('Type de licence')}</option>
                    <option value="Apache 2.0">Apache 2.0</option>
                    <option value="MIT">MIT</option>
                    <option value="GPL 3.0">GPL 3.0</option>
                    <option value="Licence Ouverte v2.0 (Etatlab)">{t('Licence Ouverte v2.0 (Etatlab)')}</option>
                </select>
                </div>
                {/* <div>
                <select name="language" id="language" >
                <option value="">{t('langue')}</option>
                    <option value="">fr</option>
                    <option value="">eng</option>
                </select>
            </div> */}
        </section>
    )
}

export default SearchBar;