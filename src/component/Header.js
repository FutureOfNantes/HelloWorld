import gaiaxSimplified from '../style/img/gaiaxSimplified.svg'
import Daseslogo from '../style/img/favicon.svg'
import Connection from './Connection'

const Header = ({ t, i18n }) => {
    const typeConnection = 'header'

    return (
        <header>
            <div className="header_topBar">
                <img src={gaiaxSimplified} alt="gaiax_logo" /> inspired by <a href="https://www.gaia-x.eu/">gaia-x</a>
            </div>
            <div className="header_navBar container clearfix">
                <div className="floatLeft">
                    <img src={Daseslogo} alt="daseslab_logo" />
                </div>
                <div className="floatRight">
                    <ul className="mainNav">
                        <li>
                            <button className="current">{t('Catalogue')}</button>
                        </li>
                        <li><button onClick={() => window.open("https://prometheus-x.org/", "_blank")}>{t('Communauté')}</button></li>
                        <li>
                            <Connection buttonName={t('Connecter')} typeConnection={typeConnection} />
                        </li>
                        <li>
                            <select onChange={(e) => {i18n.changeLanguage(e.target.value)}}>
                                <option value="fr">français</option>
                                <option value="en">english</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;