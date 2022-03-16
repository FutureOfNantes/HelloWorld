import gaiaxSimplified from '../style/img/gaiaxSimplified.svg'
import Connection from './Connection'

const Header = ({ addService }) => {
    const buttonName = "CONNECTER"

    return (
        <header>
            <div className="header_topBar">
                <img src={gaiaxSimplified} alt="gaiax_logo" /> inspired by <a href="https://www.gaia-x.eu/">gaia-x</a>
            </div>
            <div className="header_navBar container clearfix">
                <div className="floatLeft">
                    <img src="favicon.svg" alt="daseslab_logo" />
                </div>
                <div className="floatRight">
                    <ul className="mainNav">
                        <li>
                            <button className="current">Catalogue</button>
                        </li>
                        <li><button>Communauté</button></li>
                        <li>
                            <Connection buttonName={buttonName} addService={addService} />
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;