import { Link } from "react-router-dom";

const Footer = () => {
    return (
		<footer className="container">
			<div>
			<a href='/'><img src="favicon.svg" alt=""/></a>
			<p>
				Dases Lab est le portail de catalogage des services et données du data space éducation & compétences
				</p>
			<ul>
				<li><Link to="/mentions">Mentions légales</Link></li>
				<li><a href="https://calendly.com/mathieu-strabach-menjs/test-usabilite?month=2022-03">Contactez-nous</a></li>
			</ul>
			</div>
		</footer>
    )
}

export default Footer;