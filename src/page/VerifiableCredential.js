import { useDispatch, useSelector } from 'react-redux'
import { addAsyncUser } from '../features/reducers/userSlice';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { URL_NONCE, URL_VERIFY } from '../features/api'
import { ethers } from 'ethers';
import { SiweMessage } from 'siwe';
import { EthrDID } from 'ethr-did';
import { connectReducer, walletReducer, onboardedReducer, accountReducer, didReducer } from '../features/reducers/connectionSlice';


const VerifiableCredential = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const did = useSelector((state) => state.connection.did);
    const usersList = useSelector((state) => state.usersList.user);
    const [legalRep, setlegalRep] = useState(true);
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
                    `Signer pour s'authentifier sur Dases Lab`
                );

                console.log(message);
                signature = await signer.signMessage(message);
                console.log("signature: ", signature);
            }

            const sendForVerification = async () => {
                const res = await fetch(URL_VERIFY, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ message, signature }),
                });
                console.log("outcome:", await res.text());
            }

            const verifyVC = async () => {
                const ethrDid = new EthrDID({ identifier, provider, chainNameOrId: 'rinkeby' });
                const providerConfig = {
                    rpcUrl: 'https://rinkeby.infura.io/v3/d541faa3a3b74d409e82828b772fce9e',
                    registry: '0xdca7ef03e98e0dc2b855be647c39abe984fcf21b',
                    name: 'rinkeby'
                }
                const currentUser = await usersList.filter(users => (users.did === ethrDid.did));
                dispatch(didReducer(ethrDid.did));
                if (currentUser[0] != null) {

                    dispatch(accountReducer(currentUser[0]));
                    dispatch(onboardedReducer(true));
                    navigate("/dashboard")

                } else {
                    dispatch(accountReducer({}));
                    dispatch(onboardedReducer(false));
                    navigate("/vc");
                }
            }

            await signInWithEthereum();
            dispatch(addAsyncUser(data));
            dispatch(connectReducer(true));
            await verifyVC();

        }
        else {
            console.log('Pas de Metamask');
            dispatch(walletReducer(false));
            navigate("/metamask");
        }





    }

    return (
        <div className="onboarding flex column">
            <section className="main onboardingStep onboardingUserInfos">
                <button className="closeButton fixed" onClick={handleClose}>Fermer</button>
                <h1>
                    <img src="favicon.svg" alt="logoDasesLab" /> <br /><br />
                    Obtenez votre laisser passer
                </h1>
                <p>Prometheus met en relation des humains et des entreprises, pas des clés publiques. Nous avons besoin de savoir qui se cache derrière cette clé publique pour vous permettre de publier et utiliser des ressources sur le portail</p>
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
                    <p>Et me connecter au Dashboard</p>
                </form>
            </section>
        </div>
    )
}

export default VerifiableCredential;