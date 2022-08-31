import mongoose from 'mongoose';

const sdSchema = mongoose.Schema({
    id: String,
    authorDid: String,
    entity: String,
    title: String,
    description: String,
    type: String,
    typeData: String,
    levelData: String,
    formatData: String,
    originalData: String,
    personalData: String,
    labelData: String,
    accessData: String,
    accessType: String,
    urlType: String,
    documentation: String,
    conditions: String,
    licence: String,
    sdJwt: String
})


var SdModel = mongoose.model('ressource', sdSchema);

export default SdModel;