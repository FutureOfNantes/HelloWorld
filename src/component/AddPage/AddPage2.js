const AddPage2 = ({ newService, setNewService }) => {
  return (
    <div>
      <fieldset className="formGroup radio">

        <legend>Quel type de ressource souhaitez-vous partager ?</legend>

        <div className="flex row selectServiceType">

          <div className="flex-1">
            <input type="radio" className="formField" placeholder="Type de ressource" name="resourceType" id='resourceTypeDataSet' value="isDataset" required />
            <label htmlFor="resourceTypeDataSet" className="button actAsButton radioLabel forresourceTypeDataSet">Données</label>
          </div>

          <div className="flex-1">
            <input type="radio" className="formField" placeholder="Type de ressource" name="resourceType" id='resourceTypeService' value="isService" required />
            <label htmlFor="resourceTypeService" className="button actAsButton radioLabel forresourceTypeService">Service</label>
          </div>

          <div className="flex-1">
            <input type="radio" className="formField" placeholder="Type de ressource" name="resourceType" id='resourceTypeCode' value="isCode" required />
            <label htmlFor="resourceTypeCode" className="button actAsButton radioLabel forresourceTypeCode">Code</label>
          </div>

        </div>

      </fieldset >

      <div className="formGroup select">
        <select className="formField select" placeholder="Type de données proposées" name="dataType" id='dataType' required>
          <option value="">Type de données proposées</option>
          <option value="">Données démographiques</option>
          <option value="">Données sociétales</option>
          <option value="">Données sur les traces d'apprentissage</option>
          <option value="">Données sur les diplômes</option>
          <option value="">Données sur les formations</option>
          <option value="">Données issues de la recherche</option>
          <option value="">Données périscolaires</option>
          <option value="">Données parascolaires</option>
          <option value="">Données extrascolaires</option>
        </select>
        <label htmlFor="dataType" className="formLabel">Type de données proposées</label>
      </div>

      <div className="formGroup select">
        <select className="formField select" placeholder="Niveau concerné par les données" name="dataLevel" id='dataLevel' required>
          <option value="">Niveau concerné par les données</option>
          <option value="">Primaire</option>
          <option value="">Secondaire</option>
          <option value="">Supérieur</option>
          <option value="">Formation tout au long de la vie</option>
        </select>
        <label htmlFor="dataLevel" class="formLabel">Niveau concerné par les données</label>
      </div>

      <div className="formGroup select">
        <select className="formField select" placeholder="Titre de votre ressource" name="dataFormat" id='dataFormat' required>
          <option value="">Format des données</option>
          <option value="">Json</option>
          <option value="">XML</option>
        </select>
        <label htmFor="dataFormat" className="formLabel">Format des données</label>
      </div>

      <div className="formGroup select">
        <select className="formField select" placeholder="Titre de votre ressource" name="dataStandard" id='dataStandard' required>
          <option value="">JSON-LD</option>
          <option value="">Microdonnées</option>
          <option value="">RDFA</option>
          <option value="">Traces d'apprentissage</option>
          <option value="">Données sur les diplômes</option>
          <option value="">Données sur les formations</option>
          <option value="">Données issues de la recherche</option>
        </select>
        <label htmlFor="dataStandard" className="formLabel">Standard de description des données</label>
      </div>

      <fieldset className="formGroup radio">

        <legend>La ressource que vous mettez à disposition donne-t-elle accès des données à caractère personnel ?</legend>

        <div className="flex row">

          <div className="flex-1">
            <input type="radio" className="formField" placeholder="Ma ressource ne donne pas accès à des données personnelles" name="isPersonalData" id='isPersonalDataNo' value="false" required />
            <label htmlFor="isPersonalDataNo" className="button actAsButton radioLabel">Non</label>
          </div>

          <div className="flex-1">
            <input type="radio" className="formField" placeholder="Ma ressource donne accès à des données personnelles" name="isPersonalData" id='isPersonalDataYes' value="true" required />
            <label htmlFor="isPersonalDataYes" className="button actAsButton radioLabel">Oui</label>
          </div>

        </div>

        <p>Une information personnelle est une information relative à une personne physique susceptible d'être identifiée, directement ou indirectement. Par exemple : un nom, une photo, une empreinte, une adresse postale, une adresse mail, un numéro de téléphone, un numéro de sécurité sociale, un matricule interne, une adresse IP, un identifiant de connexion informatique, un enregistrement vocal, etc. </p>
        <legend>La ressource que je partage satisfait le label</legend>
        <div className="flex row selectServiceType">
        <div className="flex-1">
            <input type="radio" className="formField" placeholder="Type de ressource" name="resourceType" id='resourceTypeDataSet' value="isDataset" required />
            <label htmlFor="resourceTypeDataSet" className="button actAsButton radioLabel forresourceTypeDataSet">GAIA-X 1</label>
          </div>

          <div className="flex-1">
            <input type="radio" className="formField" placeholder="Type de ressource" name="resourceType" id='resourceTypeService' value="isService" required />
            <label htmlFor="resourceTypeService" className="button actAsButton radioLabel forresourceTypeService">GAIA-X 2</label>
          </div>

          <div className="flex-1">
            <input type="radio" className="formField" placeholder="Type de ressource" name="resourceType" id='resourceTypeCode' value="isCode" required />
            <label htmlFor="resourceTypeCode" className="button actAsButton radioLabel forresourceTypeCode">GAIA-X 3</label>
          </div>
          </div>

  
      </fieldset>
    </div>


  )
}

export default AddPage2;