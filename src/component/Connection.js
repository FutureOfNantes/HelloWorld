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
        setWallet(false)
        if (window.ethereum) {
            const verifyVC = async () => {
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
                    <button className="closeButton fixed" onClick={() => {setWallet(false)}}>{t('Fermer')}</button>
                    <h1>
                        <img src={Daseslogo} alt="" /> <br /><br />
                        {t("Authentification")}
                    </h1>
                    <p>{t("Pour publier et utiliser des ressources sur le portail, vous devez utiliser un portefeuille d’identité décentralisée")}</p>
                    <button className="button whiteButton connectMetamask" onClick={handleConnect}>{t("Se connecter avec Metamask")}</button> <br />
                    <button className="button whiteButton connectWalltId disabled">{t("Se connecter avec Walt.id")} <span>{t("bientôt disponible")}</span></button> <br />
                    <button className="button whiteButton connectBCD disabled">{t("Se connecter avec MyWallet")} <span>{t("bientôt disponible")}</span></button> <br />
                    <hr />
                    <h2>{t("Le futur de l’identité sur le web est décentralisé !")}</h2>
                    <ul className="flex wrap">
                        <li className="flex-1">{t("Un portefeuille vous permet d’être pleinement propriétaire de votre identité")}</li>
                        <li className="flex-1">{t("Nous ne stockons absolument rien vous concernant : tout est sur la blockchain !")}</li>
                        <li className="flex-1">{t("Metamask est la solution la plus utilisée en 2022, d’autres portefeuilles viendront s’ajouter dans le futur")}</li>
                    </ul>
                </section>
            </div>}

            <button className="button blackButton connectWallet" onClick={handleWallet} >{buttonName}</button>
        </Fragment>
    )
}

export default Connection;
