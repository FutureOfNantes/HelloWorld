import { useEffect, useState } from "react";
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
import separator from '../../style/img/separator.svg';
import { ethers } from "ethers";
import { URL_NONCE } from '../../features/api'
import { SiweMessage } from 'siwe';

const AddService = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
	const service = useSelector((state) => state.newService);
    const account = useSelector((state) => state.connection.account);
    const [newService, setNewService] = useState(0);

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
            const domain = window.location.host;
            const origin = window.location.origin;
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            const createSiweMessage = async (address, statement) => {
                const res = await fetch(URL_NONCE, {
                    credentials: 'include',
                });
                const message = new SiweMessage({
                    domain,
                    address,
                    statement,
                    uri: origin,
                    version: '1',
                    chainId: '4',
                    nonce: await res.text()
                });
                return message.prepareMessage();
            }

            let message = null;
            let signature = null;
            let identifier = null;

            const signInWithEthereum = async () => {
                identifier = await signer.getAddress()
                message = await createSiweMessage(
                    identifier,
                    `Signer pour ajouter votre service au catalogue`
                );

                console.log(message);
                signature = await signer.signMessage(message);
                console.log("signature: ", signature);
            }

            await signInWithEthereum();
		dispatch(addAsyncService(service));
        navigate("/dashboard/confirm")


    }

    const handleBack = () => {
        navigate("/dashboard/myoffer")
    }

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
                    <li><button className="back" onClick={handleBack}>annuler</button></li>
                    <li><button onClick={handleBack}>mon offre</button></li>
                    <li><button className="current" onClick={handleBack}>ajout de ressource</button></li>
                </ul>
            <div className="sectionContent empty flex column center">
            {newService>0 &&
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
                </ul>}
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
               <input type="submit" className="button blackButton connectMetamask" value="Signer l'ajout au catalogue sur Metamask" 
               onClick={handleSign} /> 
                }
                <p> </p>
            </div>
            </section>
            <Outlet />
        </div>
    )
}

export default AddService;