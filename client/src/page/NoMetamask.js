import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';

import { modalReducer } from '../features/reducers/connectionSlice';
import Daseslogo from '../style/img/favicon.svg'

const NoMetamask = () => {
	const [onProgress, setOnProgress] = useState(false)
	const dispatch = useDispatch()
	const handleMetamask = () => {

		window.open("https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=fr", '_blank')
		setOnProgress(true)
	}

	return (
		<div className="modal">
			<section className="main onboardingStep onboardingSelectWallet">
				<button className="closeButton fixed" onClick={() => { dispatch(modalReducer({ modal: 'welcome' })) }} >Fermer</button>
				<h1>
					<img src={Daseslogo} alt="" /> <br /><br />
					Authentification
				</h1>
				{!onProgress && <Fragment>
					<p>Nous remarquons que vous n’avez pas de portefeuille Metamask installé sur votre navigateur. Metamask est une extension Chrome ou Firefox vous permettant de vous authentifier sur la plupart des sites Internet se basant sur la <span>technologie blockchain</span></p>
					<button className="button whiteButton connectMetamask" onClick={handleMetamask}>Télécharger Metamask</button> <br />
					<hr />
					<h2>Le futur de l’identité sur le web est décentralisé !</h2>
					<ul className="flex wrap">
						<li className="flex-1">Un portefeuille vous permet d’être pleinement propriétaire de votre identité</li>
						<li className="flex-1">Nous ne stockons absolument rien vous concernant : tout est sur la blockchain !</li>
						<li className="flex-1">Metamask est la solution la plus utilisée en 2022, d’autres portefeuilles viendront s’ajouter dans le futur</li>
					</ul>
				</Fragment>}
				{onProgress && <Fragment>
					<p>Revenez ici une fois que vous avez installé l’extension et créé votre identité sur le portefeuille</p>
					<a className="questionLink" href="https://www.hellfest.fr" target="_blank" rel="noopener noreferrer" >J’ai des difficultés à créer mon compte sur Metamask</a>
					<br /><br /><br />
					<p><strong>En attente de la fin de l’installation de Metamask...</strong></p>
				</Fragment>}
			</section>
		</div>
	)
}

export default NoMetamask;