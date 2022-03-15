import AddPage0 from "../component/AddPage/AddPage0";
import AddPage1 from "../component/AddPage/AddPage1";
import AddPage2 from "../component/AddPage/AddPage2";
import AddPage3 from "../component/AddPage/AddPage3";
import AddPage4 from "../component/AddPage/AddPage4";
import AddPage5 from "../component/AddPage/AddPage5";

import separator from '../style/img/separator.svg';

const AddService = ({ newService, setNewService }) => {
    console.log(newService)
    const stylegreenButton = "current button actAsButton greenButton"
    const styleblackButton = "current button actAsButton blackButton"
    const stylewhiteButton = "current button actAsButton whiteButton"
    let info = ""
    let contenu = ""
    let acces = ""
    let cond = ""
    let publ = ""

    if (newService === 1) {
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
        setNewService(newService+1)
    }

    const handleInfo = () => {
        setNewService(1)
    }

    const handleContenu = () => {
        setNewService(2)
    }


    const handleAcces = () => {
        setNewService(3)
    }


    const handleCond = () => {
        setNewService(4)
    }

    const handlePubl = () => {
        setNewService(5)
    }

    return (
        <div className="dashboard addServices">
            <section className="main flex column centerJustify flex-1">
                <ul className="breadcrumb flex">
                    <li className="back"><a href="dashboard-serviceOffering.html">annuler</a></li>
                    <li><a href="dashboard-serviceOffering.html">mon offre</a></li>
                    <li className="current"><a href=" ">ajout de ressource</a></li>
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
                    {newService === 0 && <AddPage0 />}
                    {newService === 1 && <AddPage1 />}
                    {newService === 2 && <AddPage2 />}
                    {newService === 3 && <AddPage3 />}
                    {newService === 4 && <AddPage4 />}
                    {newService === 5 && <AddPage5 />}
                </form>
                { newService<5 &&
                <button className="button blackButton" onClick={handleSubmit}>Continuer</button>}
                {newService === 5 &&
               <input type="submit" className="button blackButton connectMetamask" value="Signer l'ajout au catalogue sur Metamask" /> 
                }
            </div>
        </div>
    )
}

export default AddService;