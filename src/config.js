const dotEnv = require('dotenv')
dotEnv.config()

const CONFIG = {
    URL_GET: process.env.BASE_URL + '?repository=' + process.env.REPO,
    URL_DELETE: process.env.BASE_URL + '/',
    COUNT: parseInt(process.env.COUNT),
    headers: {
        'Authorization': 'Basic ' + Buffer.from(process.env.AUTH).toString('base64')
    }
}

module.exports = CONFIG
