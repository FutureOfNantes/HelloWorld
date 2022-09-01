// For Production Deployment : If you want to use locally => Comment the line, else uncomment
const environment = 'https://dases-proto.herokuapp.com'

// For Local Deployment : If you want to use locally => Uncomment, else comment the line
// const environment = 'http://localhost:5000'

export const URL_SD = environment + '/sd'
export const URL_USER = environment + '/users'
export const URL_NONCE = environment + '/nonce'
export const URL_VERIFY = environment + '/verify'

export const URL_VISIONS = 'https://staging.visionstrust.com/decentralized/px'