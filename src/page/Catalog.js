import { useState } from 'react';

import SearchBar from '../component/SearchBar'
import CatalogList from '../component/CatalogList'

const Catalog = ({ t }) => {
	const dashboard = false
	const [query, setQuery] = useState("");
	const [licence, setLicence] = useState("");
	const [openData, setOpenData] = useState("");

	return (
		<div>
			<section className="container hero">
				<section className="container flex row wrap">
					<h1 className="flex-1">{t('Innovez avec les données et services du Data Space Education & Compétences')}</h1>
					<div className="flex-1">
						{t("Développeurs, chercheurs et innovateurs")} <br /><br />
						<a href="/" className="questionLink">{t('Comment est-il alimenté ? Par qui ?')}</a>
					</div>
				</section>
			</section>
			<section className="searchEngine container flex wrap row">
				<SearchBar
					setQuery={setQuery}
					setLicence={setLicence}
					setOpenData={setOpenData}
					t={t}
				/>
			</section>
			<CatalogList
				dashboard={dashboard}
				query={query}
				licence={licence}
				openData={openData}
				t={t}
			/>
		</div>
	)
}

export default Catalog;