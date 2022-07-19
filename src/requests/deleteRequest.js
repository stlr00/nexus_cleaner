const config = require('../config')

module.exports = async function deleteContainers(listOfIds) {

    for (const id of listOfIds) {
        await fetch(config.URL_DELETE + id, {
            method: 'DELETE',
            headers: config.headers
        })
    }

}
