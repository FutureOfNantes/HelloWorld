import { useState } from "react";

const AddPage0 = ({ setButtonContinuer }) => {
    const [buttonGithub, setButtonGithub] =useState(false)
    
    return (
        <div className="sectionContent flex column center">
            <fieldset className="formGroup radio">
                <legend>disposez-vous d’un fichier de self description ?</legend>
                <div className="flex row">
                    <div className="flex-1 p01em">
                        <input type="radio" className="formField" name="hadSd" id='hadSdNo' required 
                        onClick={() => {setButtonContinuer(true); setButtonGithub(false)}} />
                        <label htmlFor="hadSdNo" className="button actAsButton radioLabel button whiteButton block textCenter">Non</label>
                    </div>
                    <div className="flex-1 p01em">
                        <input type="radio" className="formField" name="hadSd" id='hadSdYes' required 
                        onClick={() => {setButtonGithub(true); setButtonContinuer(false)}} />
                        <label htmlFor="hadSdYes" className="button actAsButton radioLabel button whiteButton block textCenter">Oui</label>
                    </div>
                </div>
                <p>Un fichier de Self Description est un fichier .json décrivant votre offre de services sur lequel le moteur de génération du catalogue et le moteur de recherche associé vont se baser pour fonctionner.</p>
            </fieldset>
            {buttonGithub && <a className="button blackButton external" href="https://github.com/Prometheus-X-association">Continuer vers le dépôt Githhub des self-descriptions</a>}
    </div>

    )
}

export default AddPage0;