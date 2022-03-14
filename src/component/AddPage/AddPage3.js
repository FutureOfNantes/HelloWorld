const AddPage3 = () => {
	return (
		<div>
			<fieldset className="formGroup radio">
				<legend>L’accès aux données est</legend>
				<div className="flex row">
					<div className="flex-1 p01em">
						<input type="radio" className="formField" placeholder="L’accès aux données est" name="isOpenOrNot" id='isClosed' value="false" required />
						<label htmlFor="isClosed" className="button actAsButton radioLabel button whiteButton block textCenter">Fermé</label>
					</div>
					<div className="flex-1 p01em">
						<input type="radio" className="formField" placeholder="L’accès aux données est" name="isOpenOrNot" id='isOpen' value="true" required />
						<label htmlFor="isOpen" className="button actAsButton radioLabel button whiteButton block textCenter">Ouvert</label>
					</div>
				</div>
				<legend>L’accès se fait via</legend>
				<div className="flex row">
					<div className="flex-1 p01em">
						<input type="radio" className="formField" placeholder="L’accès aux données est" name="accessType" id='accessTypeApi' value="false" required />
						<label htmlFor="accessTypeApi" className="button actAsButton radioLabel button whiteButton block textCenter">API</label>
					</div>
					<div className="flex-1 p01em">
						<input type="radio" className="formField" placeholder="L’accès aux données est" name="accessType" id='accessTypeWebservice' value="true" required />
						<label htmlFor="accessTypeWebservice" className="button actAsButton radioLabel button whiteButton block textCenter">Webservice</label>
					</div>
				</div>
			</fieldset>
			<div className="formGroup field">
				<input type="input" className="formField" placeholder="Où l’utilisateur peut-il en savoir plus sur les données ?" name="resourceName" id='webAddress' required />
				<label htmlFor="webAddress" className="formLabel">Où l’utilisateur peut-il en savoir plus sur les données ?</label>
			</div>
			<div className="formGroup field">
				<input type="input" className="formField" placeholder="Documentation" name="resourceName" id='documentation' required />
				<label htmlFor="documentation" className="formLabel">Documentation</label>
			</div>
		</div>
	)
}

export default AddPage3;