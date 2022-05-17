import { useDispatch, useSelector } from "react-redux";
import { addType, addTypeData, addLevelData, addFormatData, addOriginalData, addPersonalData, addLabel } from '../../../features/reducers/serviceSlice';
import CreatableSelect from 'react-select/creatable';


const AddPage2 = ({ setButtonContinuer, t }) => {
  const dispatch = useDispatch();
  const service = useSelector((state) => state.newService);

  const buttonDisplay = () => {
    if (!service.type.length || !service.typeData.length || !service.levelData.length || !service.formatData.length || !service.originalData.length)
      setButtonContinuer(false)
    else setButtonContinuer(true)
  }


  const handleRessource = (event) => {
    const serviceType = event.target.value
    dispatch(addType(serviceType))
    buttonDisplay()
  }

  const handleType = (event) => {
    const typeData = event.target.value
    dispatch(addTypeData(typeData))
    buttonDisplay()
  }

  const handleLevel = (event) => {
    const levelData = event.target.value
    dispatch(addLevelData(levelData))
    buttonDisplay()
  }

  const handleFormat = (event) => {
    const formatData = event.target.value
    dispatch(addFormatData(formatData))
    buttonDisplay()
  }

  const handleStandard = (event) => {
    const originalData = event.target.value
    dispatch(addOriginalData(originalData))
    buttonDisplay()
  }

  const handlePersonnal = (event) => {
    const personalData = event.target.value
    dispatch(addPersonalData(personalData))
    buttonDisplay()
  }

  const handleLabel = (event) => {
    const labelData = event.target.value
    dispatch(addLabel(labelData))
    buttonDisplay()
  }

  const tagOptions = [
    { value: 'établissement', label: 'établissement', color: '#0052CC' },
    { value: 'formation', label: 'formation', color: '#5243AA' },
    { value: 'orientation', label: 'orientation', color: '#5243AA' },
    { value: 'éducation', label: 'éducation', color: '#5243AA' },
    { value: 'diplôme', label: 'diplôme', color: '#5243AA' }
  ]

  return (
    <div>
      <fieldset className="formGroup radio">

        <legend>{t("Quel type de ressource souhaitez-vous partager ?")}</legend>

        <div className="flex row selectServiceType">

          <div className="flex-1">
            <input type="radio" className="formField" placeholder="Type de ressource" name="resourceType" id='resourceTypeDataSet' value="Dataset" required
              onClick={handleRessource} />
            <label htmlFor="resourceTypeDataSet" className="button actAsButton radioLabel forresourceTypeDataSet textCenter">{t("Données")}</label>
          </div>

          <div className="flex-1">
            <input type="radio" className="formField" placeholder="Type de ressource" name="resourceType" id='resourceTypeService' value="Service" required
              onClick={handleRessource} />
            <label htmlFor="resourceTypeService" className="button actAsButton radioLabel forresourceTypeService textCenter">Service</label>
          </div>

          <div className="flex-1">
            <input type="radio" className="formField" placeholder="Type de ressource" name="resourceType" id='resourceTypeCode' value="code" required
              onClick={handleRessource} />
            <label htmlFor="resourceTypeCode" className="button actAsButton radioLabel forresourceTypeCode textCenter">Code</label>
          </div>
        </div>
      </fieldset >
      {service.type === "Dataset" && <div>
        <div className="formGroup select">
          <CreatableSelect className="formGroup select" isMulti
            options={tagOptions}
            placeholder={t("Etiquette de la ressource (ajouter ou en créer une)")} />
        </div>
        <div className="formGroup select">
          <select className="formField select" placeholder="Type de données proposées" name="dataType" id='dataType' required defaultValue={'Default'}
            onChange={handleType}>
            <option value="Default" disabled>{t("Type de données proposées")}</option>
            <option value="Données démographiques">Données démographiques</option>
            <option value="Données sociétales">Données sociétales</option>
            <option value="Données sur les traces d'apprentissage">Données sur les traces d'apprentissage</option>
            <option value="Données sur les diplômes">Données sur les diplômes</option>
            <option value="Données sur les formations">Données sur les formations</option>
            <option value="Données périscolaires">Données périscolaires</option>
            <option value="Données parascolaires">Données parascolaires</option>
            <option value="Données extrascolaires">Données extrascolaires</option>
            <option value="Données Education Nationale">Données Education Nationale</option>
          </select>
          <label htmlFor="dataType" className="formLabel">{t("Type de données proposées")}</label>
        </div>

        <div className="formGroup select">
          <select className="formField select" placeholder="Niveau concerné par les données" name="dataLevel" id='dataLevel' required defaultValue={'Default'}
            onChange={handleLevel}>
            <option value="Default" disabled>{t("Niveau concerné par les données")}</option>
            <option value="Primaire">Primaire</option>
            <option value="Secondaire">Secondaire</option>
            <option value="Supérieur">Supérieur</option>
            <option value="Formation tout au long de la vie">Formation tout au long de la vie</option>
          </select>
          <label htmlFor="dataLevel" className="formLabel">{t("Niveau concerné par les données")}</label>
        </div>

        <div className="formGroup select">
          <select className="formField select" placeholder="Titre de votre ressource" name="dataFormat" id='dataFormat' required defaultValue={'Default'}
            onChange={handleFormat}>
            <option value="Default" disabled>{t("Format des données")}</option>
            <option value="Json">Json</option>
            <option value="XML">XML</option>
          </select>
          <label htmlFor="dataFormat" className="formLabel">{t("Format des données")}</label>
        </div>

        <div className="formGroup select">
          <select className="formField select" placeholder="Titre de votre ressource" name="dataStandard" id='dataStandard' required defaultValue={'Default'}
            onChange={handleStandard}>
            <option value="Default" disabled>{t("Standard de description des données")}</option>
            <option value="JSON-LD">JSON-LD</option>
            <option value="Microdonnées">Microdonnées</option>
            <option value="RDFA">RDFA</option>
          </select>
          <label htmlFor="dataStandard" className="formLabel">{t("Standard de description des données")}</label>
        </div>

        <fieldset className="formGroup radio">

          <legend>{t("La ressource que vous mettez à disposition donne-t-elle accès des données à caractère personnel ?")}</legend>

          <div className="flex row">

            <div className="flex-1 p01em">
              <input type="radio" className="formField" placeholder="Ma ressource ne donne pas accès à des données personnelles" name="isPersonalData" id='isPersonalDataNo' value="non" required
                onClick={handlePersonnal} />
              <label htmlFor="isPersonalDataNo" className="button actAsButton radioLabel">{t("Non")}</label>
            </div>

            <div className="flex-1 p01em">
              <input type="radio" className="formField" placeholder="Ma ressource donne accès à des données personnelles" name="isPersonalData" id='isPersonalDataYes' value="oui" required
                onClick={handlePersonnal} />
              <label htmlFor="isPersonalDataYes" className="button actAsButton radioLabel">{t("Oui")}</label>
            </div>

          </div>

          <p><br />{t("Une information personnelle est une information relative à une personne physique susceptible d'être identifiée, directement ou indirectement. Par exemple : un nom, une photo, une empreinte, une adresse postale, une adresse mail, un numéro de téléphone, un numéro de sécurité sociale, un matricule interne, une adresse IP, un identifiant de connexion informatique, un enregistrement vocal, etc. ")}</p>
          <legend>
            {t("Quel niveau de label Gaia-X votre ressource satisfait-elle ?")}
            <a href="https://gaia-x.eu/sites/default/files/2022-02/Labelling_Criteria_Whitepaper_v07.pdf" target="_blank" rel="noopener noreferrer" className="helpIcon"> </a>
          </legend>
          <div className="flex row">
            <div className="flex-1">
              <input type="radio" className="formField" placeholder="Type de label" name="labelType" id='labelType1' value="nolabel" required
                onClick={handleLabel} />
              <label htmlFor="labelType1" className="button actAsButton radioLabel">{t("Pas de label")}</label>
            </div>
          </div>
          <br/>
          <div className="flex row">
            <div className="flex-1">
              <input type="radio" className="formField" placeholder="Type de label" name="labelType" id='labelType2' value="label1" required
                onClick={handleLabel} />
              <label htmlFor="labelType2" className="button actAsButton radioLabel">GAIA-X 1</label>
            </div>
            <div className="flex-1">
              <input type="radio" className="formField" placeholder="Type de label" name="labelType" id='labelType3' value="label2" required
                onClick={handleLabel} />
              <label htmlFor="labelType3" className="button actAsButton radioLabel">GAIA-X 2</label>
            </div>

            <div className="flex-1">
              <input type="radio" className="formField" placeholder="Type de label" name="labelType" id='labelType4' value="label3" required
                onClick={handleLabel} />
              <label htmlFor="labelType4" className="button actAsButton radioLabel">GAIA-X 3</label>
            </div>
          </div>
          <br />
        </fieldset>
      </div>}
      {service.type === "Service" && <div>
        L'ajout de services sera possible dans quelques semaines
      </div>}
      {service.type === "code" && <div>
        L'ajout de code sera possible dans quelques semaines
      </div>}
    </div>
  )
}

export default AddPage2;