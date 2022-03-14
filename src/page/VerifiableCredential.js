import { useDispatch } from 'react-redux'
import { connectReducer } from '../features/reducers/slices';
import logoDasesLab from '../style/img/logoDL.svg';
import { addAsyncUser } from '../features/reducers/slices';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useForm } from 'react-hook-form';


const VerifiableCredential = () => {
    const dispatch = useDispatch();
    const did = useSelector((state) => state.connection.did);
    const [legalRep, setlegalRep] = useState(true);
    const {register, handleSubmit } = useForm();

    const handleClose = () => {
        dispatch(connectReducer(false));
    }

    const handleLegalRep = () => {
        setlegalRep(!legalRep);

    }

    const onSubmit = (data) => {
        dispatch(addAsyncUser(data));
        dispatch(connectReducer(false));
    }

    return (
        <div className="onboarding flex column">
            <section className="main onboardingStep onboardingUserInfos">
                <button className="closeButton fixed" onClick={handleClose}>Fermer</button>
                <h1>
                    <img src={logoDasesLab} alt="logoDasesLab" /> <br /><br />
                    Obtenez votre laisser passer
                </h1>
                <p>Prometheus met en relation des humains et des entreprises, pas des clés publiques. Nous avons besoin de savoir qui se cache derrière cette clé publique pour vous permettre de publier et utiliser des ressources sur le portail</p>
                <input className="publicKey" {...register("did")} value={did} readOnly/>
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
                        <input className="formField" {...register("companyAddress")}/>
                        <label htmlFor="proAddress" className="formLabel">Adresse de votre organisation</label>
                    </div>
                    <div className="formGroup">
                        <input type="checkbox" id="consentCGV" onChange={handleLegalRep} />
                        <label htmlFor="consentCGV">Je ne suis pas le représentant légal de l'organisation</label>
                    </div>
                    {!legalRep && <div className="formGroup field">
                        <input className="formField" {...register("legalRepresentative")}/>
                        <label htmlFor="name" className="formLabel">Nom du représentant légal</label>
                    </div>}
                    {!legalRep && <div className="formGroup field">
                        <input type="email" className="formField" {...register("emailLegalRepresentative")} />
                        <label htmlFor="proEmail" className="formLabel">Courriel du représentant légal</label>
                    </div>}
                    <div className="formGroup">
                        <input type="checkbox" id="consentCGV" />
                        <label htmlFor="consentCGV">Je consens à rejoindre Prometheus, et m’engage à respecter sa charte</label>
                    </div>
                    <input type="submit" className="button blackButton" value="Continuer" />
                </form>
            </section>
        </div>
    )
}

export default VerifiableCredential;