import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import AddPage0 from "./AddPage/AddPage0";
import AddPage1 from "./AddPage/AddPage1";
import AddPage2 from "./AddPage/AddPage2";
import AddPage3 from "./AddPage/AddPage3";
import AddPage4 from "./AddPage/AddPage4";
import AddPage5 from "./AddPage/AddPage5";
import { addInfo, addAsyncService } from '../../features/reducers/serviceSlice';
import { ethers } from "ethers";
import { URL_NONCE } from '../../features/api'
import { SiweMessage } from 'siwe';

const AddService = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const service = useSelector((state) => state.newService);
    const account = useSelector((state) => state.connection.account);
    const [newService, setNewService] = useState(1);

    useEffect(() => {
        const unique_id = uuid()
        const infos = {
            id: unique_id,
            authorDid: account.did,
            entity: account.companyName

        }
        dispatch(addInfo(infos));

    }, [])

    const handleSign = async () => {
        // const domain = window.location.host;
        // const origin = window.location.origin;
        // const provider = new ethers.providers.Web3Provider(window.ethereum);
        // const signer = provider.getSigner();

        // const createSiweMessage = async (address, statement) => {
        //     const res = await fetch(URL_NONCE, {
        //         credentials: 'include',
        //     });
        //     const message = new SiweMessage({
        //         domain,
        //         address,
        //         statement,
        //         uri: origin,
        //         version: '1',
        //         chainId: '4',
        //         nonce: await res.text()
        //     });
        //     return message.prepareMessage();
        // }

        // let message = null;
        // let signature = null;
        // let identifier = null;

        // const signInWithEthereum = async () => {
        //     identifier = await signer.getAddress()
        //     message = await createSiweMessage(
        //         identifier,
        //         `Signer pour ajouter votre service au catalogue`
        //     );

        //     console.log(message);
        //     signature = await signer.signMessage(message);
        //     console.log("signature: ", signature);
        // }

        // await signInWithEthereum();
        dispatch(addAsyncService(service));
        navigate("/dashboard/confirm")
    }

    const handleBack = () => {
        navigate("/dashboard/myoffer")
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
    const [buttonContinuer, setButtonContinuer] = useState(false);

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

    return (
        <Fragment>
            <section className="main flex column centerJustify flex-1">
                <header className="flex row wrap">
                    <button className="back" onClick={handleBack}>Annuler</button>
                    <div className="flex-1 alignCenter">
                        <h1>Partager une ressource</h1>
                        <h2>Formulaire d’ajout de ressource au catalogue décentralisé</h2>
                    </div>
                </header>

                <div className="flex row wrap centerJustify container">

                    {newService > 0 && <section className="addResourceNav">

                        <ul className="formProgression flex column center">
                            <li className={info} onClick={handleInfo}>1. Informations sur la ressource</li>
                            <li className={contenu} onClick={handleContenu}>2. Contenu</li>
                            <li className={acces} onClick={handleAcces}>3. Accès</li>
                            <li className={cond} onClick={handleCond}>4. Conditions d'utilisation</li>
                            <li className={publ} onClick={handlePubl}>5. Publication</li>
                            <li>
								Gagnez du temps si vous possédez déjà une self-description <br/>
								➡ <a href="https://github.com/Prometheus-X-association/selfdescription" target="_blank" rel="noopener noreferrer">Déposer votre self-description sur le github</a>
							</li>
                        </ul>

                    </section>}
                    <form className="addResourceForm flex-1" action="">
                        <section className="sectionContent flex column flexStart">

                            <div className="form flex column w100p" action="">
                                {newService === 0 && <AddPage0 setButtonContinuer={setButtonContinuer} />}
                                {newService === 1 && <AddPage1 setButtonContinuer={setButtonContinuer} />}
                                {newService === 2 && <AddPage2 setButtonContinuer={setButtonContinuer} />}
                                {newService === 3 && <AddPage3 setButtonContinuer={setButtonContinuer} />}
                                {newService === 4 && <AddPage4 setButtonContinuer={setButtonContinuer} />}
                                {newService === 5 && <AddPage5 setButtonContinuer={setButtonContinuer} />}
                            </div>
                            {newService < 5 && buttonContinuer &&
                        <button className="button blackButton" onClick={handleSubmit}>Continuer</button>}
                    {newService === 5 &&
                        <input type="submit" className="button blackButton connectMetamask" value="Signer l'ajout au catalogue sur Metamask"
                            onClick={handleSign} />
                    }
                    <p> </p>
                        </section>
                    </form>
                </div>
            </section>
            <Outlet />
        </Fragment>
    )
}

export default AddService;