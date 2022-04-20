import { useNavigate } from 'react-router-dom';

import logoDasesLab from '../style/img/logoDL.svg'

const NoMetamask = () => {
	const navigate = useNavigate();
	
    const handleClose = () => {
		navigate(-1);
    }

    return (
        <div className="onboarding flex column">
		<section className="main onboardingStep onboardingSelectWallet">	
			<button className="closeButton fixed" onClick={handleClose}>Fermer</button>
			<h1>
				<img src={logoDasesLab} alt=""/> <br/><br/>
				Télécharger Metamask
			</h1>
			<p>Pour publier et utiliser des ressources sur le portail, vous devez utiliser un portefeuille d’identité décentralisée</p>
            <p>Pour le moment seul le portefeuille Metamask peut être utilisé</p>
			<button className="button whiteButton connectMetamask"><a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=fr">Installer Metamask</a></button> <br/><br/>
		</section>
	</div>
    )
}

export default NoMetamask;