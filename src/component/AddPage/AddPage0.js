const AddPage0 = () => {
    return (
        <div className="sectionContent flex column center">
            <fieldset className="formGroup radio">
                <legend>disposez-vous d’un fichier de self description ?</legend>
                <div className="flex row">
                    <div className="flex-1 p01em">
                        <input type="radio" className="formField" placeholder="Ma ressource ne donne pas accès à des données personnelles" name="hadSd" id='hadSdNo' value="false" required />
                        <label htmlFor="hadSdNo" className="button actAsButton radioLabel button whiteButton block textCenter">Non</label>
                    </div>
                    <div className="flex-1 p01em">
                        <input type="radio" className="formField" placeholder="Ma ressource donne accès à des données personnelles" name="hadSd" id='hadSdYes' value="true" required />
                        <label htmlFor="hadSdYes" className="button actAsButton radioLabel button whiteButton block textCenter">Oui</label>
                    </div>
                </div>
                <p>Un fichier de Self Description est un fichier .json décrivant votre offre de services sur lequel le moteur de génération du catalogue et le moteur de recherche associé vont se baser pour fonctionner.</p>
            </fieldset>
    </div>

    )
}

export default AddPage0;