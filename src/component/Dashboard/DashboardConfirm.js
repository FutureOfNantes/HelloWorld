import { useNavigate } from 'react-router-dom';
import logoDasesLab from '../../style/img/favicon.svg'

const DashboardConfirm = () => {
	const navigate = useNavigate();

	const handleClose = () => {
		navigate(-1);
	}

	return (
		<div className="onboarding flex column">
			<section className="main onboardingStep onboardingSelectWallet">
				<button className="closeButton fixed" onClick={handleClose}>Fermer</button>
				<img src={logoDasesLab} alt="" /> <br /><br />
				Votre ressource a bien été ajoutée
				<p>Pour publier et utiliser des ressources sur le portail, vous devez utiliser un portefeuille d’identité décentralisée</p>
				<button className="button blackButton" onClick={handleClose}>Voir mes ressources</button> <br /><br />
			</section>
		</div>
	)
}

export default DashboardConfirm;