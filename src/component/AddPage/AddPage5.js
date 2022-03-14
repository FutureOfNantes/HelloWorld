
import readyForCatalog from '../../assets/img/readyForCatalog.svg';

const AddPage5 = () => {
	return (
		<div>
			<p className="textCenter">
				<strong>Prêt pour le catalogage ?</strong> <br />
				Votre service sera analysé par Prometheus et vous serez notifié via l’e-mail renseigné <br />
				lors de votre inscription sur le portail lors de sa parution. <br />
				<img src={readyForCatalog} alt=""/>
			</p>
		</div>

	)
}

export default AddPage5;