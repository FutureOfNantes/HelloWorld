import { useState } from "react";
import AddPage0 from "../component/AddPage/AddPage0";
import AddPage1 from "../component/AddPage/AddPage1";
import AddPage2 from "../component/AddPage/AddPage2";
import AddPage3 from "../component/AddPage/AddPage3";
import AddPage4 from "../component/AddPage/AddPage4";
import AddPage5 from "../component/AddPage/AddPage5";

import separator from '../style/img/separator.svg';

const AddService = ({ newService, setNewService }) => {
    const stylegreenButton = "current button actAsButton greenButton"
    const styleblackButton = "current button actAsButton blackButton"
    const stylewhiteButton = "current button actAsButton whiteButton"
    let info = ""
    let contenu = ""
    let acces = ""
    let cond = ""
    let publ = ""
    const [buttonContinuer, setButtonContinuer] = useState(false);

    if (newService === 0) {
        info = stylewhiteButton
        contenu = stylewhiteButton
        acces = stylewhiteButton
        cond = stylewhiteButton
        publ = stylewhiteButton
    }

    else if (newService === 1) {
        info = styleblackButton
        contenu = stylewhiteButton
        acces = stylewhiteButton
        cond = stylewhiteButton
        publ = stylewhiteButton
    } else if (newService === 2) {
        info = stylegreenButton
        contenu = styleblackButton
        acces = stylewhiteButton
        cond = stylewhiteButton
        publ = stylewhiteButton
    } else if (newService === 3) {
        info = stylegreenButton
        contenu = stylegreenButton
        acces = styleblackButton
        cond = stylewhiteButton
        publ = stylewhiteButton
    } else if (newService === 4) {
        info = stylegreenButton
        contenu = stylegreenButton
        acces = stylegreenButton
        cond = styleblackButton
        publ = stylewhiteButton
    } else if (newService === 5) {
        info = stylegreenButton
        contenu = stylegreenButton
        acces = stylegreenButton
        cond = stylegreenButton
        publ = styleblackButton
    }

    const handleSubmit = () => {
        setButtonContinuer(false)
        setNewService(newService+1)
    }

    const handleInfo = () => {
        setNewService(1)
    }

    const handleContenu = () => {
        if (contenu !== stylewhiteButton) setNewService(2)
    }


    const handleAcces = () => {
        if (acces !== stylewhiteButton) 
        setNewService(3)
    }


    const handleCond = () => {
        if (cond !== stylewhiteButton) 
        setNewService(4)
    }

    const handlePubl = () => {
        if (publ !== stylewhiteButton) 
        setNewService(5)
    }

    return (
        <div className="dashboard addServices">
            <section className="main flex column centerJustify flex-1">
                <ul className="breadcrumb flex">
                    <li><button className="back">annuler</button></li>
                    <li><button>mon offre</button></li>
                    <li><button className="current">ajout de ressource</button></li>
                </ul>
            </section>
            <div className="sectionContent empty flex column center">
                <ul className="formProgression flex row center">
                    <li className={info} onClick={handleInfo}>Informations sur la ressource</li>
                    <li className="sep"><img src={separator} alt="" /></li>
                    <li className={contenu} onClick={handleContenu}>Contenu</li>
                    <li className="sep"><img src={separator} alt="" /></li>
                    <li className={acces} onClick={handleAcces}>Accès</li>
                    <li className="sep"><img src={separator} alt="" /></li>
                    <li className={cond} onClick={handleCond} >Conditions d'utilisation</li>
                    <li className="sep"><img src={separator} alt="" /></li>
                    <li className={publ} onClick={handlePubl}>Publication</li>
                </ul>
                <form className="form flex column" action="">
                    {newService === 0 && <AddPage0 setButtonContinuer={setButtonContinuer} />}
                    {newService === 1 && <AddPage1 setButtonContinuer={setButtonContinuer} />}
                    {newService === 2 && <AddPage2 setButtonContinuer={setButtonContinuer} />}
                    {newService === 3 && <AddPage3 setButtonContinuer={setButtonContinuer} />}
                    {newService === 4 && <AddPage4 setButtonContinuer={setButtonContinuer} />}
                    {newService === 5 && <AddPage5 setButtonContinuer={setButtonContinuer} />}
                </form>
                { newService<5 && buttonContinuer &&
                <button className="button blackButton" onClick={handleSubmit}>Continuer</button>}
                {newService === 5 &&
               <input type="submit" className="button blackButton connectMetamask" value="Signer l'ajout au catalogue sur Metamask" /> 
                }
            </div>
        </div>
    )
}

export default AddService;