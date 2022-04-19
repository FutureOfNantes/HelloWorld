import { useDispatch, useSelector } from "react-redux";
import { addConditions, addLicence } from '../../../features/reducers/serviceSlice';


const AddPage4 = ({ setButtonContinuer }) => {
	const dispatch = useDispatch();
	const service = useSelector((state) => state.newService);

	const buttonDisplay = () => {
		if (!service.conditions.length)
		setButtonContinuer(false)
	   else setButtonContinuer(true)
	}

	const handleConditions = (event) => {
		const conditions = event.target.value
		dispatch(addConditions(conditions))
		buttonDisplay()
	}

	const handleLicence = (event) => {
		const licence = event.target.value
		dispatch(addLicence(licence))
		buttonDisplay()
	}

	return (
		<div>
			<div className="formGroup field">
				<input type="url" className="formField" placeholder="URL de vos conditions d'utilisation" name="resourceConditions" id='resourceConditions' required
				onChange={handleConditions}/>
				<label htmlFor="resourceConditions" className="formLabel">URL de vos conditions d'utilisation</label>
			</div>
			<div className="formGroup select">
							<select className="formField select" placeholder="" name="licence" id='licence' required defaultValue={'Default'}
							onChange = {handleLicence}>
								<option value="Default" disabled>Licence d'utilisation de votre ressource</option>
								<option value="MIT">MIT</option>
								<option value="Apache 2.0">Apache 2.0</option>
								<option value="GPL 2.0">GPL 2.0</option>
								<option value="GPL 3.0">GPL 3.0</option>
								<option value="Licence Ouverte v2.0 (Etatlab)">Licence Ouverte v2.0 (Etatlab)</option>							
							</select>
							<label htmlFor="dataStandard" className="formLabel">Licence d'utilisation de votre ressource</label>
						</div> 

		</div>

	)
}

export default AddPage4;