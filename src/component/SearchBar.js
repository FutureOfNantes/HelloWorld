const SearchBar = ({ setQuery, setLicence, setOpenData, t }) => {

    return (
        <section className="searchEngine container flex column">
            <div>
                <input type="text" placeholder={t('Recherchez un produit')}
                    onChange={e => setQuery(e.target.value.toLowerCase())} />
            </div>
            <div className="flex row center">
                <div>
                    {t('Filtrer')}
                </div>
                <select name="type" id="type">
                    <option value="">{t('Type de ressource')}</option>
                    <option value="data">{t('Données')}</option>
                    <option value="service">{t('Service')}</option>
                    <option value="code">{t('Code')}</option>
                </select>
                <select name="licence" id="licence" onChange={e => setLicence(e.target.value)}>
                    <option value="">{t('Type de licence')}</option>
                    <option value="Apache 2.0">Apache 2.0</option>
                    <option value="MIT">MIT</option>
                    <option value="GPL 3.0">GPL 3.0</option>
                    <option value="Licence Ouverte v2.0 (Etatlab)">{t('Licence Ouverte v2.0 (Etatlab)')}</option>
                </select>
                <select name="open" id="open" onChange={e => setOpenData(e.target.value)}>
                    <option value="">{t('Données ouvertes')}</option>
                    <option value="non">{t('Oui')}</option>
                    <option value="oui">{t('Non')}</option>
                </select>
                <select name="open" id="open">
                    <option value="">{t('Données personnelles')}</option>
                    <option value="non">{t('Oui')}</option>
                    <option value="oui">{t('Non')}</option>
                </select>
            </div>
        </section>
    )
}

export default SearchBar;