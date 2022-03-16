const AddPage1 = ({ setButtonContinuer }) => {
    const fulled = {title: false, description: false}
    const handleTitle = (event) => {
        if (event.target.value !== "") fulled.title = true;
        if (fulled.title && fulled.description) setButtonContinuer(true)
    }

    const handleDescription = (event) => {
        if (event.target.value !== "") fulled.description = true;
        if (fulled.title && fulled.description) setButtonContinuer(true)
    }


    return (
        <div>
            <div className="formGroup field">
                <input type="input" className="formField" placeholder="Titre de votre ressource" name="resourceName" id='resourceName' required
                onChange={handleTitle}/>
                <label htmlFor="resourceName" className="formLabel">Titre de votre ressource</label>
            </div>
            <div className="formGroup field">
                <textarea className="formField" placeholder="Description de votre ressource" name="resourceDesc" id='resourceDesc' required rows="5"
                onChange={handleDescription}></textarea>
                <label htmlFor="resourceDesc" className="formLabel">Description de votre ressource</label>
            </div>
        </div>

    )
}

export default AddPage1;