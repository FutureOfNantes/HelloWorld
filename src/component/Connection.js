import sign from '../features/sign'

import { useDispatch, useSelector } from 'react-redux';
import { connectReducer, walletReducer, onboardedReducer, accountReducer, didReducer } from '../features/reducers/connectionSlice';
import { useNavigate } from 'react-router-dom';
import { Fragment, useState } from 'react';
import Daseslogo from '../style/img/favicon.svg'
import { Magic } from 'magic-sdk'
import { ethers } from 'ethers';

const Connection = ({ t, setModalConnection }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const usersList = useSelector((state) => state.usersList.user);
    const [email, setEmail] = useState('');
    const magic = new Magic('pk_live_0E95F3EE1840FE99');
    const magicProvider = new ethers.providers.Web3Provider(magic.rpcProvider);

    // const verifyVC = async (ethrDid) => {
    //     const currentUser = await usersList.filter(users => (users.did === ethrDid.did))
    //     dispatch(didReducer(ethrDid.did));
    //     if (currentUser[0] != null) {
    //         dispatch(connectReducer(true));
    //         dispatch(accountReducer(currentUser[0]));
    //         dispatch(onboardedReducer(true));
    //         switch (typeConnection) {
    //             case 'header': navigate("/dashboard/myoffer");
    //                 break;
    //             case 'add': navigate("/dashboard/add");
    //                 break;
    //             case 'use': navigate(`/dashboard/service/${id}`);
    //                 break;
    //             default: console.log("Problème d'usage du bouton Connexion");
    //         }
    //     } else {
    //         dispatch(accountReducer({}));
    //         dispatch(onboardedReducer(false));
    //         navigate("/vc");
    //     }
    // }

    const handleConnect = async (source) => {
        setModalConnection(false)
        if (source === 'email') {
            await magic.auth.loginWithEmailOTP({ email });
            const currentUser = await usersList.filter(users => (users.emailOwner === email))
            if (currentUser[0] != null) {
                dispatch(connectReducer(true));
                dispatch(accountReducer(currentUser[0]));
                dispatch(onboardedReducer(true));
            }
            else {
                const signer = magicProvider.getSigner();
                const address = await signer.getAddress();
                dispatch(didReducer(address))
                dispatch(accountReducer({}));
                dispatch(onboardedReducer(false));
                navigate("/vc");
            }

        } else if (source === 'metamask') {
            if (window.ethereum) {
                const verifyVC = async () => {
                    const currentUser = await usersList.filter(users => (users.did === ethrDid.did))
                    dispatch(didReducer(ethrDid.did));
                    if (currentUser[0] != null) {
                        dispatch(connectReducer(true));
                        dispatch(accountReducer(currentUser[0]));
                        dispatch(onboardedReducer(true));
                        navigate("/dashboard/myoffer");
                        // switch (typeConnection) {
                        //     case 'header': navigate("/dashboard/myoffer");
                        //         break;
                        //     case 'add': navigate("/dashboard/add");
                        //         break;
                        //     case 'use': navigate(`/dashboard/service/${id}`);
                        //         break;
                        //     default: console.log("Problème d'usage du bouton Connexion");
                        // }
                    } else {
                        dispatch(accountReducer({}));
                        dispatch(onboardedReducer(false));
                        navigate("/vc");
                    }
                }
                const texte = `${t("Signer pour s'authentifier sur Dases Lab")}`;
                const ethrDid = await sign(texte);
                await verifyVC();
            }
            else {
                console.log('Pas de Metamask');
                dispatch(walletReducer(false));
                navigate("/metamask");
            }




            const texte = `${t("Signer pour s'authentifier sur Dases Lab")}`;
            // const ethrDid = await sign(texte);
            // await verifyVC(ethrDid);
        }


    }
    return (
        <Fragment>
            <div className="modal">
                <section className="main onboardingStep onboardingSelectWallet">
                    <button className="closeButton fixed" onClick={() => { setModalConnection(false) }}>{t('Fermer')}</button>
                    <h1>
                        {t("Authentification")}
                    </h1>
                    <p>Vous devez avoir créé un compte pour publier et utiliser des ressources sur le portail</p>
                    <h2>Se connecter avec un portefeuille</h2>
                    <button className="button whiteButton connectMetamask">Se connecter avec Metamask</button>
                    <button className="button whiteButton connectWalltId disabled">Se connecter avec Wallt.id <span>bientôt disponible</span></button>
                    <button className="button whiteButton connectBCD disabled">Se connecter avec MyWallet <span>bientôt disponible</span></button>
                    <hr />
                    <h2>Se connecter avec un e-mail</h2>
                    <form action="" className="form w100p">
                        <div className="formGroup field">
                            <input type="email"
                                className="formField"
                                placeholder="Votre e-mail"
                                name="userMail"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required />
                            <label for="userMail" className="formLabel">Votre e-mail</label>
                            <input type="submit"
                                className="button blackButton"
                                value="Continuer"
                                onClick={() => { handleConnect('email') }}
                            />
                        </div>
                        <legend>Si vous avez déjà un compte associé à cet e-mail, vous allez être directement connecté, sinon nous allons vous envoyer un lien vous permettant de vous connecter au portail</legend>
                    </form>
             </section>
            </div>
        </Fragment>
    )
}

export default Connection;
