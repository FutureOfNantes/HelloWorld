const DashboardSurvey = () => {
    return (
        <section className="main flex column flex-1">
            <header>
                <h1><img src="style/img/serviceOffering.svg" alt="" />Aidez-nous à améliorer Dases Lab !</h1>
            </header>
            <div className="sectionContent container768 textBlock">
                <h2>Test d'utilisabilité</h2>
                <p>
                    Donnez-nous votre avis sur l'utilisabilité du service à l'aide d'un <strong>formulaire qui ne prend qu'une toute petite minute</strong> à remplir ! <br />
                </p>
                <a className="button blackButton external" href="https://framaforms.org/evaluation-de-lutilisabilite-de-dases-lab-1647418309">Formulaire d'évaluation de l'utilisabilité du portail Dases Lab</a>
                <hr />
                <h2>Enquête macro</h2>
                <p>
                    Si vous avez un peu plus de temps, et que vous faites partie de l'écosystème des EdTechs, n'hésitez pas à participer à une enquête plus approfondie sur votre quotidien, vos aspirations et vos moyens. Cette enquête, plus macroscopique, nous permet de prendre le pouls de la filière pour mieux adapter notre réponse fonctionnelle.
                </p>
                <a className="button blackButton external" href="https://framaforms.org/recueil-des-besoins-des-edtech-1638181762">Enquête sur le quotidien, les aspirations et les moyens des EdTechs</a>
                <hr />
                <h2>Communauté Prometheus</h2>
                <p>
                    Rejoignez la communauté Prometheus-X et ses groupes de travail.
                </p>
                <a className="button blackButton external" href="https://prometheus-x.org">Prometheus-X</a>
            </div>
        </section>	
    )
}

export default DashboardSurvey;