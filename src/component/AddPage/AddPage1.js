const AddPage1 = () => {
    return (
        <div>
            <div className="formGroup field">
                <input type="input" className="formField" placeholder="Titre de votre ressource" name="resourceName" id='resourceName' required />
                <label htmlFor="resourceName" className="formLabel">Titre de votre ressource</label>
            </div>
            <div className="formGroup field">
                <textarea className="formField" placeholder="Description de votre ressource" name="resourceDesc" id='resourceDesc' required rows="5"></textarea>
                <label htmlFor="resourceDesc" className="formLabel">Description de votre ressource</label>
            </div>
        </div>

    )
}

export default AddPage1;