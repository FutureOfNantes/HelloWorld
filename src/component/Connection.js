import sign from '../features/sign'

import { useDispatch, useSelector } from 'react-redux';
import { connectReducer, walletReducer, onboardedReducer, accountReducer, didReducer } from '../features/reducers/connectionSlice';
import { useNavigate } from 'react-router-dom';
import { Fragment, useState } from 'react';
import Daseslogo from '../style/img/favicon.svg'

const Connection = ({ buttonName, typeConnection, id, t }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const usersList = useSelector((state) => state.usersList.user);
    const [wallet, setWallet] = useState(false)

    const handleWallet = () => {
        setWallet(true);
    }
    const handleConnect = async () => {
        if (window.ethereum) {
            const verifyVC = async () => {
                setWallet(false)
                const currentUser = await usersList.filter(users => (users.did === ethrDid.did))
                dispatch(didReducer(ethrDid.did));
                if (currentUser[0] != null) {
                    dispatch(connectReducer(true));
                    dispatch(accountReducer(currentUser[0]));
                    dispatch(onboardedReducer(true));
                    switch (typeConnection) {
                        case 'header': navigate("/dashboard/myoffer");
                            break;
                        case 'add': navigate("/dashboard/add");
                            break;
                        case 'use': navigate(`/dashboard/service/${id}`);
                            break;
                        default: console.log("Problème d'usage du bouton Connexion");
                    }
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
    }
    return (
        <Fragment>
            {wallet &&
            <div className="modal">
                <section className="main onboardingStep onboardingSelectWallet">
                    <button className="closeButton fixed" onClick={() => {setWallet(false)}}>Fermer</button>
                    <h1>
                        <img src={Daseslogo} alt="" /> <br /><br />
                        Authentification
                    </h1>
                    <p>Pour publier et utiliser des ressources sur le portail, vous devez utiliser un portefeuille d’identité décentralisée</p>
                    <button className="button whiteButton connectMetamask" onClick={handleConnect}>Se connecter avec Metamask</button> <br />
                    <button className="button whiteButton connectWalltId disabled">Se connecter avec Wallt.id <span>bientôt disponible</span></button> <br />
                    <button className="button whiteButton connectBCD disabled">Se connecter avec MyWallet <span>bientôt disponible</span></button> <br />
                    <hr />
                    <h2>Le futur de l’identité sur le web est décentralisé !</h2>
                    <ul className="flex wrap">
                        <li className="flex-1">Un portefeuille vous permet d’être pleinement propriétaire de votre identité</li>
                        <li className="flex-1">Nous ne stockons absolument rien vous concernant : tout est sur la blockchain !</li>
                        <li className="flex-1">Metamask est la solution la plus utilisée en 2022, d’autres portefeuilles viendront s’ajouter dans le futur</li>
                    </ul>
                </section>
            </div>}

            <button className="button blackButton connectWallet" onClick={handleWallet} >{buttonName}</button>
        </Fragment>
    )
}

export default Connection;
