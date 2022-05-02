import { Link } from "react-router-dom";

const Footer = ({ t }) => {
	return (
		<footer>
			<div className="container">
				<a href='/'><img src="favicon.svg" alt="" /></a>
				<p>
					{t('Footer')}
				</p>
				<ul>
					<li><Link to={t('mentions')}>{t('Mentions légales')}</Link></li>
					<li><a href="https://calendly.com/mathieu-strabach-menjs/dases?month=2022-04">{t('Contactez-nous')}</a></li>
					<li><a href="https://github.com/pgrandne/daseslab">GitHub</a></li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer;