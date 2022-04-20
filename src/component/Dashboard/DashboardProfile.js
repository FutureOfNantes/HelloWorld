import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { verifyCredential } from 'did-jwt-vc';
import { Resolver } from 'did-resolver';
import { getResolver } from 'ethr-did-resolver';


const DashboardProfile = ({ t, i18n }) => {
    console.log(i18n.language)
    const navigate = useNavigate();
    const account = useSelector((state) => state.connection.account);
    const handleDownload = async () => {
        const rpcUrl = "https://rinkeby.infura.io/v3/d541faa3a3b74d409e82828b772fce9e";
        const resolver = new Resolver(getResolver({ rpcUrl, name: "rinkeby" }));
        const verifiedVC = await verifyCredential(account.vcJwt, resolver)
        const element = document.createElement("a");
        var jsonVc = JSON.stringify(verifiedVC.verifiableCredential, null, 2);
        const file = new Blob([jsonVc], {
            type: "json/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = `${account.givenName}_${account.familyName}_ParticipantVC.json`;
        document.body.appendChild(element);
        element.click();
    }

    return (
        <section className="main flex column flex-1">
            <ul className="container breadcrumb flex row">
                <li className="back"><button onClick={() => { navigate(-1) }}>{t('retour')}</button></li>
            </ul>
            <div className="servicePage">
                <main className="container sectionContent">
                    <section className="container servicePageTitle flex row">
                        <div>
                            <h1>{t('Mon Profil')}</h1>
                        </div>
                    </section>
                    <section className="container servicePageContent flex wrap column">
                        <div className="serviceDetails">
                            <table>
                                <thead>
                                    <tr>
                                        <td colSpan="2">
                                            <h2>{account.did}</h2>
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{t('langue')}</td>
                                        <td>
                                            {i18n.language === "fr" &&
                                                <select onChange={(e) => { i18n.changeLanguage(e.target.value) }}>
                                                    <option value="fr">français</option>
                                                    <option value="en">english</option>
                                                </select>}
                                            {i18n.language === "en" &&
                                                <select onChange={(e) => { i18n.changeLanguage(e.target.value) }}>
                                                    <option value="en">english</option>
                                                    <option value="fr">français</option>
                                                </select>}

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>{t('Nom')}</td>
                                        <td>{account.familyName}</td>
                                    </tr>
                                    <tr>
                                        <td>{t('Prénom')}</td>
                                        <td>{account.givenName}</td>
                                    </tr>
                                    <tr>
                                        <td>{t('Email')}</td>
                                        <td>{account.emailOwner}</td>
                                    </tr>
                                    <tr>
                                        <td>{t('Entité')}</td>
                                        <td>{account.companyName}</td>
                                    </tr>
                                    <tr>
                                        <td>{t('Adresse entité')}</td>
                                        <td>{account.companyAddress}</td>
                                    </tr>
                                    <tr>
                                        <td>{t('Laissez-passer')}</td>
                                        <td>
                                            <button className="button whiteButton" onClick={handleDownload}>
                                                {t('Télécharger votre laissez-passer')}
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>{t("Logo de l'entité")}</td>
                                        <td> <input type="file" id="myFile" name="filename" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </main>
            </div>
        </section>
    )
}

export default DashboardProfile;