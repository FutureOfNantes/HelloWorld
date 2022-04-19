import { useDispatch } from "react-redux";
import { addTitle, addDescription } from '../../../features/reducers/serviceSlice';


const AddServiceForm = () => {
    const dispatch = useDispatch();

    return (
        <form className="addResourceForm flex-1" action="">
            <section className="sectionContent flex column flexStart">
                <div className="form flex column w100p" id="form1">
                    <div className="formGroup field">
                        <input type="input" className="formField" placeholder="Titre de votre ressource" name="resourceName" id='resourceName' required
                            onChange={e => { dispatch(addTitle(e.target.value)) }}
                        />
                        <label htmlFor="resourceName" className="formLabel">Titre de votre ressource (5 caractères minimum)</label>
                    </div>
                    <div className="formGroup field">
                        <textarea className="formField" placeholder="Description de votre ressource" name="resourceDesc" id='resourceDesc' required
                            onChange={e => { dispatch(addDescription(e.target.value)) }}
                        />
                        <label htmlFor="resourceDesc" className="formLabel">Description de votre ressource (5 caractères minimum)</label>
                    </div>
                    <button className="button blackButton">
                        Continuer
                    </button>
                </div>
                <div className="form flex column w100p" id="form2">
                </div>
                <div className="form flex column w100p" id="form3">
                </div>
                <div className="form flex column w100p" id="form4">
                </div>
                <div className="form flex column w100p" id="form5">
                </div>
            </section>
        </form>
    )
}

export default AddServiceForm;