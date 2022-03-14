import { useDispatch } from 'react-redux';
import { walletReducer } from '../features/reducers/connectionSlice';

import logoDasesLab from '../style/img/logoDL.svg'

const NoMetamask = () => {
	const dispatch = useDispatch();
	
    const handleClose = () => {
		dispatch(walletReducer(true))
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
			<button className="button whiteButton connectMetamask"><a href="https://www.google.com/search?q=metamask">Installer Metamask</a></button> <br/><br/>
		</section>
	</div>
    )
}

export default NoMetamask;