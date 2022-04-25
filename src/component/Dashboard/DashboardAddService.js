import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import AddPage1 from "./AddPage/AddPage1";
import AddPage2 from "./AddPage/AddPage2";
import AddPage3 from "./AddPage/AddPage3";
import AddPage4 from "./AddPage/AddPage4";
import AddPage5 from "./AddPage/AddPage5";
import { addInfo, addAsyncService } from '../../features/reducers/serviceSlice';
import sign from "../../features/sign";

const AddService = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const service = useSelector((state) => state.newService);
    const account = useSelector((state) => state.connection.account);
    const [newService, setNewService] = useState(1);
    const [buttonContinuer, setButtonContinuer] = useState(false);

    useEffect(() => {
        const unique_id = uuid()
        const infos = {
            id: unique_id,
            authorDid: account.did,
            entity: account.companyName
        }
        dispatch(addInfo(infos));
        window.scrollTo(0, 0);
    },[dispatch, account.did, account.companyName])

    const handleBack = () => {
        navigate(-1)
    }

    const styleDone = "done button actAsButton"
    const styleCurrent = "current button actAsButton blackButton"
    const styleNotCurrent = "button actAsButton whiteButton"
    const styleDisabled = "button actAsButton whiteButton disabled"
    let info = ""
    let contenu = ""
    let acces = ""
    let cond = ""
    let publ = ""

    if (newService === 0) {
        info = styleNotCurrent
        contenu = styleNotCurrent
        acces = styleNotCurrent
        cond = styleNotCurrent
        publ = styleDisabled
    }

    else if (newService === 1) {
        info = styleCurrent
        contenu = styleNotCurrent
        acces = styleNotCurrent
        cond = styleNotCurrent
        publ = styleDisabled
    } else if (newService === 2) {
        info = styleDone
        contenu = styleCurrent
        acces = styleNotCurrent
        cond = styleNotCurrent
        publ = styleDisabled
    } else if (newService === 3) {
        info = styleDone
        contenu = styleDone
        acces = styleCurrent
        cond = styleNotCurrent
        publ = styleDisabled
    } else if (newService === 4) {
        info = styleDone
        contenu = styleDone
        acces = styleDone
        cond = styleCurrent
        publ = styleDisabled
    } else if (newService === 5) {
        info = styleDone
        contenu = styleDone
        acces = styleDone
        cond = styleDone
        publ = styleCurrent
    }

    const handleSign = async () => {
        // const texte = `Signer pour l'ajout du service : ${service.title}`;
        // await sign(texte);
        dispatch(addAsyncService(service));
        navigate("/dashboard/confirm")
    }

    const handleSubmit = () => {
        setButtonContinuer(false)
        setNewService(newService + 1)
    }

    const handleInfo = () => {
        setNewService(1)
    }

    const handleContenu = () => {
        if (contenu !== styleNotCurrent) setNewService(2)
    }


    const handleAcces = () => {
        if (acces !== styleNotCurrent)
            setNewService(3)
    }


    const handleCond = () => {
        if (cond !== styleNotCurrent)
            setNewService(4)
    }

    const handlePubl = () => {
        if (publ !== styleNotCurrent)
            setNewService(5)
    }

    const Button = () => {
        return (
            <button className="button blackButton" onClick={handleSubmit}>
                Continuer
            </button>
        )
    }

    return (
        <Fragment>
            <section className="main flex column centerJustify flex-1">
                <header className="flex row wrap">
                <ul className="container breadcrumb flex row">
                    <li className="back"><button onClick={handleBack}>retour</button></li>
                </ul>
                    <div className="flex-1 alignCenter">
                        <h1>Partager une ressource</h1>
                        <h2>Formulaire d’ajout de ressource au catalogue décentralisé</h2>
                    </div>
                </header>

                <div className="flex row wrap centerJustify container">

                    <section className="addResourceNav">

                        <ul className="formProgression flex column center">
                            <li className={info} onClick={handleInfo}>1. Informations sur la ressource</li>
                            <li className={contenu} onClick={handleContenu}>2. Contenu</li>
                            <li className={acces} onClick={handleAcces}>3. Accès</li>
                            <li className={cond} onClick={handleCond}>4. Conditions d'utilisation</li>
                            <li className={publ} onClick={handlePubl}>5. Publication</li>
                            <li>
                                Gagnez du temps si vous possédez déjà une self-description <br />
                                ➡ <a href="https://github.com/Prometheus-X-association/selfdescription" target="_blank" rel="noopener noreferrer">Déposer votre self-description sur le github</a>
                            </li>
                        </ul>

                    </section>
                    <form className="addResourceForm flex-1" action="">
                        <section className="sectionContent flex column flexStart">
                            <div className="form flex column w100p" action="">
                                { newService === 1 && <AddPage1 setButtonContinuer={setButtonContinuer} />}
                                { newService === 2 && <AddPage2 setButtonContinuer={setButtonContinuer} />}
                                { newService === 3 && <AddPage3 setButtonContinuer={setButtonContinuer} />}
                                { newService === 4 && <AddPage4 setButtonContinuer={setButtonContinuer} />}
                                { newService < 5 && buttonContinuer && <Button />}
                                { newService === 5 && <Fragment><AddPage5 />
                                <button className="button blackButton connectMetamask" onClick={handleSign}>
                                    Signer l'ajout au catalogue sur Metamask
                                </button></Fragment>}
                            </div>
                        </section>
                    </form>
                    {/* <AddServiceForm /> */}
                </div>
            </section>
            <Outlet />
        </Fragment>
    )
}

export default AddService;