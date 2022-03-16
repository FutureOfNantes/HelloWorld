import { useDispatch, useSelector } from "react-redux";
import { addAccessData, addAccessType, addUrl, addDocumentation } from '../../features/reducers/serviceSlice';


const AddPage3 = ({ setButtonContinuer }) => {
	const dispatch = useDispatch();
	const service = useSelector((state) => state.newService);

	const buttonDisplay = () => {
		if (!service.accessData.length || !service.accessType.length || !service.urlType.length)
		setButtonContinuer(false)
	   else setButtonContinuer(true)
	}

	const handleAccess = (event) => {
		const access = event.target.value
		  dispatch(addAccessData(access))
		  buttonDisplay()
	  }

	  const handleVia = (event) => {
		const via = event.target.value
		  dispatch(addAccessType(via))
		  buttonDisplay()
	  }

	  const handleUrl = (event) => {
		const url = event.target.value
		  dispatch(addUrl(url))
		  buttonDisplay()
	  }

	  const handleDoc = (event) => {
		const doc = event.target.value
		  dispatch(addDocumentation(doc))
		  buttonDisplay()
	  }

	return (
		<div>
			<fieldset className="formGroup radio">
				<legend>L’accès aux données est</legend>
				<div className="flex row">
					<div className="flex-1 p01em">
						<input type="radio" className="formField" placeholder="L’accès aux données est" name="isOpenOrNot" id='isClosed' value="false" required 
						onClick={handleAccess}/>
						<label htmlFor="isClosed" className="button actAsButton radioLabel button whiteButton block textCenter">Fermé</label>
					</div>
					<div className="flex-1 p01em">
						<input type="radio" className="formField" placeholder="L’accès aux données est" name="isOpenOrNot" id='isOpen' value="true" required 
						onClick={handleAccess}/>
						<label htmlFor="isOpen" className="button actAsButton radioLabel button whiteButton block textCenter">Ouvert</label>
					</div>
				</div>
				<legend>L’accès se fait via</legend>
				<div className="flex row">
					<div className="flex-1 p01em">
						<input type="radio" className="formField" placeholder="L’accès aux données est" name="accessType" id='accessTypeApi' value="false" required 
						onClick={handleVia}/>
						<label htmlFor="accessTypeApi" className="button actAsButton radioLabel button whiteButton block textCenter">API</label>
					</div>
					<div className="flex-1 p01em">
						<input type="radio" className="formField" placeholder="L’accès aux données est" name="accessType" id='accessTypeWebservice' value="true" required 
						onClick={handleVia}/>
						<label htmlFor="accessTypeWebservice" className="button actAsButton radioLabel button whiteButton block textCenter">Webservice</label>
					</div>
				</div>
			</fieldset>
			<div className="formGroup field">
				<input type="input" className="formField" placeholder="Où l’utilisateur peut-il en savoir plus sur les données ?" name="resourceName" id='webAddress' required 
				onChange={handleUrl}/>
				<label htmlFor="webAddress" className="formLabel">Où l’utilisateur peut-il en savoir plus sur les données (URL) ?</label>
			</div>
			<div className="formGroup field">
				<input type="input" className="formField" placeholder="Documentation" name="documentation" id='documentation' required 
				onChange={handleDoc}/>
				<label htmlFor="documentation" className="formLabel">Documentation (URL)</label>
			</div>
		</div>
	)
}

export default AddPage3;