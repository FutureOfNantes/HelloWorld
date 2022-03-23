import { useDispatch, useSelector } from 'react-redux'
import { addAsyncUser } from '../features/reducers/userSlice';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { URL_NONCE } from '../features/api'
import { ethers } from 'ethers';
import { SiweMessage } from 'siwe';
import { connectReducer, walletReducer } from '../features/reducers/connectionSlice';


const VerifiableCredential = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const did = useSelector((state) => state.connection.did);
    const [legalRep, setlegalRep] = useState(true);
    const [vcDone, setVcDone] =useState(false);
    const { register, handleSubmit } = useForm();

    const handleClose = () => {
        dispatch(connectReducer(false));
        navigate('/');
    }

    const handleLegalRep = () => {
        setlegalRep(!legalRep);

    }

    const onSubmit = async (data) => {

        if (window.ethereum) {
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
                    `Signer pour créer votre laisser passer sur Dases Lab`
                );

                console.log(message);
                signature = await signer.signMessage(message);
                console.log("signature: ", signature);
            }

            await signInWithEthereum();
            dispatch(addAsyncUser(data));
            dispatch(connectReducer(true));
            setVcDone(true);

        }
        else {
            console.log('Pas de Metamask');
            dispatch(walletReducer(false));
            navigate("/metamask");
        }





    }

    return (
        <div className="onboarding flex column">
            {!vcDone &&
            <section className="main onboardingStep onboardingUserInfos">
                <button className="closeButton fixed" onClick={handleClose}>Fermer</button>
                <h1>
                    <img src="favicon.svg" alt="logoDasesLab" /> <br /><br />
                    Obtenez votre laissez-passer
                </h1>
                <p>DasesLab met en relation des humains et des entreprises, pas des clés publiques. Nous avons besoin de savoir qui se cache derrière cette clé publique pour vous permettre de publier et utiliser des ressources sur le portail</p>
                <input className="publicKey" {...register("did")} value={did} readOnly />
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="formGroup field">
                        <input className="formField" {...register("familyName")} />
                        <label htmlFor="name" className="formLabel">Votre nom</label>
                    </div>
                    <div className="formGroup field">
                        <input className="formField" {...register("givenName")} />
                        <label htmlFor="forname" className="formLabel">Votre prénom</label>
                    </div>
                    <div className="formGroup field">
                        <input type="email" className="formField" {...register("emailOwner")} />
                        <label htmlFor="proEmail" className="formLabel">Votre courriel professionnel</label>
                    </div>
                    <div className="formGroup field">
                        <input className="formField" {...register("companyName")} />
                        <label htmlFor="entityName" className="formLabel">Nom de votre organisation</label>
                    </div>
                    <div className="formGroup field">
                        <input className="formField" {...register("companyAddress")} />
                        <label htmlFor="proAddress" className="formLabel">Adresse de votre organisation</label>
                    </div>
                    <div className="formGroup">
                        <input type="checkbox" id="consentCGV" onChange={handleLegalRep} />
                        <label htmlFor="consentCGV">Je ne suis pas le représentant légal de l'organisation</label>
                    </div>
                    {!legalRep && <div className="formGroup field">
                        <input className="formField" {...register("legalRepresentative")} />
                        <label htmlFor="name" className="formLabel">Nom du représentant légal</label>
                    </div>}
                    {!legalRep && <div className="formGroup field">
                        <input type="email" className="formField" {...register("emailLegalRepresentative")} />
                        <label htmlFor="proEmail" className="formLabel">Courriel du représentant légal</label>
                    </div>}
                    <div className="formGroup">
                        <input type="checkbox" id="consentCGV" />
                        <label htmlFor="consentCGV">Je consens à rejoindre DasesLab, et m’engage à respecter sa charte d'utilisation</label>
                    </div>
                    <input type="submit" className="button blackButton" value="Confirmer mon identité" />
                </form>
            </section>}
            {!!vcDone && <section className="main onboardingStep onboardingUserInfos">
                <button className="closeButton fixed" onClick={handleClose}>Fermer</button>
                <h1>
                    <img src="favicon.svg" alt="logoDasesLab" /> <br /><br />
                    Votre laissez-passer est créé
                </h1>
                <p>Vous pouvez maintenant vous connecter sur la page d'accueil</p>
                    <button className="button blackButton" onClick={handleClose}>Retourner sur le Portail</button>
            </section>}












        </div>
    )
}

export default VerifiableCredential;