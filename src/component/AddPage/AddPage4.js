import { useDispatch, useSelector } from "react-redux";
import { addConditions } from '../../features/reducers/serviceSlice';


const AddPage4 = ({ setButtonContinuer }) => {
	const dispatch = useDispatch();
	const service = useSelector((state) => state.newService);
	console.log(service);

	const handleConditions = (event) => {
		const conditions = event.target.value
		dispatch(addConditions(conditions))
		setButtonContinuer(true)

	}

	return (
		<div>
			<div className="formGroup field">
				<input type="input" className="formField" placeholder="Iindiquez un lient vers vos conditions d'utilisation" name="resourceConditions" id='resourceConditions' required
				onChange={handleConditions}/>
				<label htmlFor="resourceConditions" className="formLabel">Indiquez un lien vers vos conditions d'utilisation</label>
			</div>

		</div>

	)
}

export default AddPage4;