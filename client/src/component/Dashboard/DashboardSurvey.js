const DashboardSurvey = ({ t }) => {
    return (
        <section className="main flex column flex-1">
            <header>
                <h1><img src="style/img/serviceOffering.svg" alt="" />
                    {t('Aidez-nous à améliorer Dases Lab !')}
                </h1>
            </header>
            <div className="sectionContent container768 textBlock">
                <h2>{t("Test d'utilisabilité")}</h2>
                <p>
                    {t('Donnez-nous votre avis sur')} <br />
                </p>
                <a className="button blackButton external" href="https://framaforms.org/evaluation-de-lutilisabilite-de-dases-lab-1647418309" target="_blank" rel="noopener noreferrer">
                    {t("Formulaire d'évaluation de l'utilisabilité du portail Dases Lab")}
                </a>
                <hr />
                <h2>{t('Enquête macro')}</h2>
                <p>
                    {t('plus de temps')}
                </p>
                <a className="button blackButton external" href="https://framaforms.org/recueil-des-besoins-des-edtech-1638181762" target="_blank" rel="noopener noreferrer">
                    {t('Enquête sur le quotidien, les aspirations et les moyens des EdTechs')}
                </a>
                <hr />
                <h2>{t('Communauté Prometheus')}</h2>
                <p>
                    {t('Rejoignez la communauté Prometheus-X et ses groupes de travail.')}
                </p>
                <a className="button blackButton external" href="https://prometheus-x.org" target="_blank" rel="noopener noreferrer">
                    Prometheus-X
                </a>
            </div>
        </section>
    )
}

export default DashboardSurvey;