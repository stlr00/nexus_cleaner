const config = require("../config");

module.exports = async function getComponentList() {
    const listOfContainers = []
    let continuationTokeResponse = ''

    do {
        const resp = await fetch(config.URL_GET + continuationTokeResponse, {
            headers: config.headers
        })

        const data = await resp.json()
        listOfContainers.push(...data.items)
        continuationTokeResponse = data.continuationToken

        if (continuationTokeResponse !== null) {
            continuationTokeResponse = '&continuationToken=' + continuationTokeResponse
        }

    } while (continuationTokeResponse != null)

    return listOfContainers
}
