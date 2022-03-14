import AddPage1 from "../component/AddPage/AddPage1";
import AddPage2 from "../component/AddPage/AddPage2";
import AddPage3 from "../component/AddPage/AddPage3";

const AddService = ({ newService, setNewService }) => {
    const handleSubmit = () => {
        setNewService(newService + 1)
    }
    console.log(newService)
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
                    <li className="current button actAsButton blackButton">Informations sur la ressource</li>
                    <li className="sep"><img src="style/img/separator.svg" alt="" /></li>
                    <li className="button actAsButton whiteButton">Contenu</li>
                    <li className="sep"><img src="style/img/separator.svg" alt="" /></li>
                    <li className="button actAsButton whiteButton">Accès</li>
                    <li className="sep"><img src="style/img/separator.svg" alt="" /></li>
                    <li className="button actAsButton whiteButton">Conditions d'utilisation</li>
                    <li className="sep"><img src="style/img/separator.svg" alt="" /></li>
                    <li className="button actAsButton whiteButton">Publication</li>
                </ul>
                <form className="form flex column" action="">
                    {newService === 1 && <AddPage1 />}
                    {newService === 2 && <AddPage2 />}
                    {newService === 3 && <AddPage3 />}
                </form>
                <input type="submit" value="Continuer" className="button blackButton" onClick={handleSubmit} />
            </div>
        </div>
    )
}

export default AddService;