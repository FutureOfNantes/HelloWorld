import { useDispatch, useSelector } from 'react-redux'
import { addAsyncUser } from '../features/reducers/userSlice';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { URL_NONCE } from '../features/api'
import { ethers } from 'ethers';
import { SiweMessage } from 'siwe';
import { connectReducer, walletReducer, didReducer } from '../features/reducers/connectionSlice';
import { verifyCredential } from 'did-jwt-vc';
import { Resolver } from 'did-resolver';
import { getResolver } from 'ethr-did-resolver';
import { fetchAsyncUsers } from '../features/reducers/userSlice';

const VerifiableCredential = ({ t }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const did = useSelector((state) => state.connection.did);
    const usersList = useSelector((state) => state.usersList.user);

    const [legalRep, setlegalRep] = useState(true);
    const [vcDone, setVcDone] = useState(false);
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
            dispatch(didReducer(did));
            setTimeout(() => {
                dispatch(fetchAsyncUsers())
            }, 3000);
        }

        else {
            console.log('Pas de Metamask');
            dispatch(walletReducer(false));
            navigate("/metamask");
        }
    }

    const handleVc = async () => {
        const currentUser = await usersList.filter(users => (users.did === did));
        const rpcUrl = "https://rinkeby.infura.io/v3/d541faa3a3b74d409e82828b772fce9e";
        const resolver = new Resolver(getResolver({ rpcUrl, name: "rinkeby" }));
        const verifiedVC = await verifyCredential(currentUser[0].vcJwt, resolver)
        const element = document.createElement("a");
        var jsonVc = JSON.stringify(verifiedVC.verifiableCredential, null, 2);
        const file = new Blob([jsonVc], {
            type: "json/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = `${currentUser[0].givenName}_${currentUser[0].familyName}_ParticipantVC.json`;
        document.body.appendChild(element);
        element.click();
    }

    return (
        <div className="onboarding flex column">
            {!vcDone &&
                <section className="main onboardingStep onboardingUserInfos">
                    <button className="closeButton fixed" onClick={handleClose}>
                        {t('Fermer')}
                    </button>
                    <h1>
                        <img src="favicon.svg" alt="logoDasesLab" /> <br /><br />
                        {t('Obtenez votre laissez-passer')}
                    </h1>
                    <p>{t('DasesLab met en relation')}</p>
                    <input className="publicKey" {...register("did")} value={did} readOnly />
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="formGroup field">
                            <input className="formField" {...register("familyName")} />
                            <label htmlFor="name" className="formLabel">
                                {t('Votre nom')}
                            </label>
                        </div>
                        <div className="formGroup field">
                            <input className="formField" {...register("givenName")} />
                            <label htmlFor="forname" className="formLabel">
                                {t('Votre prénom')}
                            </label>
                        </div>
                        <div className="formGroup field">
                            <input type="email" className="formField" {...register("emailOwner")} />
                            <label htmlFor="proEmail" className="formLabel">
                                {t('Votre courriel professionnel')}
                            </label>
                        </div>
                        <div className="formGroup field">
                            <input className="formField" {...register("companyName")} />
                            <label htmlFor="entityName" className="formLabel">
                                {t('Nom de votre organisation')}
                            </label>
                        </div>
                        <div className="formGroup field">
                            <input className="formField" {...register("companyAddress")} />
                            <label htmlFor="proAddress" className="formLabel">
                                {t('Adresse de votre organisation')}
                            </label>
                        </div>
                        <div className="formGroup">
                            <input type="checkbox" id="consentCGV" onChange={handleLegalRep} />
                            <label htmlFor="consentCGV">
                                {t("Je ne suis pas le représentant légal de l'organisation")}
                            </label>
                        </div>
                        {!legalRep && <div className="formGroup field">
                            <input className="formField" {...register("legalRepresentative")} />
                            <label htmlFor="name" className="formLabel">
                                {t('Nom du représentant légal')}
                            </label>
                        </div>}
                        {!legalRep && <div className="formGroup field">
                            <input type="email" className="formField" {...register("emailLegalRepresentative")} />
                            <label htmlFor="proEmail" className="formLabel">
                                {t('Courriel du représentant légal')}
                            </label>
                        </div>}
                        <div className="formGroup">
                            <input type="checkbox" id="consentCGV" required />
                            <label htmlFor="consentCGV">
                                {t("Je consens à rejoindre DasesLab, et m’engage à respecter sa")}
                                <Link to="/mentions">
                                    {t("charte d'utilisation")}
                                </Link>
                            </label>
                        </div>
                        <input type="submit" className="button blackButton" value="Confirmer mon identité" />
                    </form>
                </section>}
            {!!vcDone && <section className="main onboardingStep onboardingUserInfos">
                <button className="closeButton fixed" onClick={handleClose}>
                    {t('Fermer')}
                </button>
                <h1>
                    <img src="favicon.svg" alt="logoDasesLab" /> <br /><br />
                    {t('Votre laissez-passer est créé')}
                </h1>
                <p>{t("Vous pouvez maintenant vous connecter sur la page d'accueil")}</p>
                <button className="button blackButton" onClick={handleClose}>
                    {t('Retourner sur le Portail')}
                </button>
                <p /><p />
                <p>{t('Vous pouvez télécharger votre laissez-passer pour le conserver en local')}</p>
                <button className="button blackButton" onClick={handleVc}>
                    {t('Télécharger votre laissez-passer')}
                </button>
            </section>}
        </div>
    )
}

export default VerifiableCredential;