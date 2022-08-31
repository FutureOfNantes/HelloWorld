import sign from '../features/sign'

import { useDispatch, useSelector } from 'react-redux';
import { connectReducer, walletReducer, accountReducer, didReducer } from '../features/reducers/connectionSlice';
import { modalReducer } from '../features/reducers/connectionSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { Fragment, useState } from 'react';
import { Magic } from 'magic-sdk'
import { ethers } from 'ethers';

const Connection = ({ t }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const usersList = useSelector((state) => state.usersList.user);
    const prov = useSelector((state) => state.connection.source);
    const [email, setEmail] = useState('');
    const [magicLinkLoading, setMagicLinkLoading] = useState(false);
    const { id } = useParams();

    const handleConnect = async (source) => {
        if (source === 'email') {
            setMagicLinkLoading(true);
            const magic = new Magic('pk_live_0E95F3EE1840FE99');
            const magicProvider = new ethers.providers.Web3Provider(magic.rpcProvider);
            await magic.auth.loginWithEmailOTP({ email });
            const currentUser = await usersList.filter(users => (users.emailOwner === email))
            dispatch(modalReducer({ modal: '' }))
            if (currentUser[0] != null) {
                console.log("utilisateur existant")
                dispatch(accountReducer(currentUser[0]));
                dispatch(didReducer(currentUser[0].did));
            }
            else {
                console.log("utilisateur non existant")
                const signer = magicProvider.getSigner();
                const address = await signer.getAddress();
                dispatch(didReducer(address))
                dispatch(accountReducer({}));
            }
            dispatch(connectReducer(true));
            switch (prov) {
                case 'header': navigate("/dashboard/myoffer");
                    break;
                case 'add': navigate("/dashboard/add");
                    break;
                case 'use': navigate(`/dashboard/service/${id}`);
                    break;
                default: console.log("Problème d'usage du bouton Connexion");
            }
        }
        else if (source === 'metamask') {
            console.log("connexion avec metamask")
            if (window.ethereum) {
                console.log("metamask present")
                dispatch(modalReducer({ modal: '' }))
                const verifyVC = async () => {
                    const currentUser = await usersList.filter(users => (users.did === ethrDid.did))
                    dispatch(didReducer(ethrDid.did));
                    if (currentUser[0] != null) {
                        console.log('utilisateur existant')
                        dispatch(accountReducer(currentUser[0]));
                    }
                    else {
                        dispatch(accountReducer({}));
                    }
                    dispatch(connectReducer(true));
                    switch (prov) {
                        case 'header': navigate("/dashboard/myoffer");
                            break;
                        case 'add': navigate("/dashboard/add");
                            break;
                        case 'use': navigate(`/dashboard/service/${id}`);
                            break;
                        default: console.log("Problème d'usage du bouton Connexion");
                    }
                }
                const texte = `${t("Signer pour s'authentifier sur Dases Lab")}`;
                const ethrDid = await sign(texte);
                await verifyVC();
            }
            else {
                dispatch(modalReducer({ modal: "noMetamask" }))
                dispatch(walletReducer(false));
            }
        }
    }

    return (
        <Fragment>
            <div className="modal">
                <section className="main onboardingStep onboardingSelectWallet">
                    <button className="closeButton fixed" onClick={() => { dispatch(modalReducer({ modal: '' })) }} >{t('Fermer')}</button>
                    <h1>
                        {t("Authentification")}
                    </h1>
                    <p>Vous devez avoir créé un compte pour publier et utiliser des ressources sur le portail</p>
                    <h2>Se connecter avec un portefeuille</h2>
                    <button
                        className="button whiteButton connectMetamask"
                        onClick={() => { handleConnect('metamask') }}
                    >
                        Se connecter avec Metamask
                    </button>
                    <button className="button whiteButton connectWalltId disabled">Se connecter avec Wallt.id <span>bientôt disponible</span></button>
                    <button className="button whiteButton connectBCD disabled">Se connecter avec MyWallet <span>bientôt disponible</span></button>
                    <hr />
                    <h2>Se connecter avec un e-mail</h2>
                    <div className="form w100p">
                        <div className="formGroup field">
                            <input type="email"
                                className="formField"
                                placeholder="Votre e-mail"
                                name="userMail"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required />
                            <label htmlFor="userMail" className="formLabel">Votre e-mail</label>
                            <button
                                className="button blackButton"
                                onClick={() => { handleConnect('email') }}
                            >Continuer
                            </button>
                            {magicLinkLoading && <div><strong>--- En chargement ---</strong></div>}
                        </div>
                        <legend>Si vous avez déjà un compte associé à cet e-mail, vous allez être directement connecté, sinon nous allons vous envoyer un lien vous permettant de vous connecter au portail</legend>
                    </div>
                </section>
            </div>
        </Fragment>
    )
}

export default Connection;
