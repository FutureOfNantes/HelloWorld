import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    did: String,
    givenName: String,
    familyName: String,
    emailOwner: String,
    companyName: String,
    companyAddress: String,
    vcJwt: String
})

var UserModel = mongoose.model('user', postSchema);

export default UserModel;