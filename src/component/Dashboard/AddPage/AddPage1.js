import { useDispatch, useSelector } from "react-redux";
import { addTitle, addDescription } from '../../../features/reducers/serviceSlice';

const AddPage1 = ({ setButtonContinuer }) => {
    const dispatch = useDispatch();
    const service = useSelector((state) => state.newService);

    const buttonDisplay = () => {
        if (service.title.length > 3 && service.description.length > 5) setButtonContinuer(true)
        else setButtonContinuer(false)
    }
 
    const handleTitle = (event) => {
        dispatch(addTitle(event.target.value))
        buttonDisplay()
    }

    const handleDescription = (event) => {
        dispatch(addDescription(event.target.value))
        buttonDisplay()
    }


    return (
        <div>
            <div className="formGroup field">
                <input type="input" className="formField" placeholder="Titre de votre ressource" name="resourceName" id='resourceName' required
                onChange={handleTitle}/>
                <label htmlFor="resourceName" className="formLabel">Titre de votre ressource (5 caractères minimum)</label>
            </div>
            <div className="formGroup field">
                <textarea className="formField" placeholder="Description de votre ressource" name="resourceDesc" id='resourceDesc' required rows="5"
                onChange={handleDescription}></textarea>
                <label htmlFor="resourceDesc" className="formLabel">Description de votre ressource (5 caractères minimum)</label>
            </div>
        </div>

    )
}

export default AddPage1;