import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div>
            Nous n'avons pas trouvé la page. Vous pouvez retourner sur la <Link to="/">page d'accueil</Link>
        </div>
    )
}

export default PageNotFound;