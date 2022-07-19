import {Container} from "../models/container";

function sortContainersByName(listOfContainers: Container[]): Record<string, Container[]> {
    const resultDictionary: Record<string, Container[]> = {}

    for (let i = 0; i < listOfContainers.length; i++) {
        if (/^[a-zA-Z]/.test(listOfContainers[i].version)) {
            if (resultDictionary.hasOwnProperty(listOfContainers[i].name)) {
                resultDictionary[listOfContainers[i].name].push(listOfContainers[i])
            } else {
                resultDictionary[listOfContainers[i].name] = [listOfContainers[i]]
            }
        }
    }
    return resultDictionary
}

function sortContainersByVersions(objectWithContainers: Record<string, Container[]>): Record<string, Container[]> {
    for (const name in objectWithContainers) {
        const arr = objectWithContainers[name]

        arr.sort((a, b) => b.version.replace(/\d+/g, n => (+n + 100000).toString())
            .localeCompare(a.version.replace(/\d+/g, n => (+n + 100000).toString()))
        )

        objectWithContainers[name] = arr
    }

    return objectWithContainers
}


module.exports = function sortContainers(listOfContainers) {
    return sortContainersByName(listOfContainers)
    // const sortedByName = sortContainersByName(listOfContainers)
    // return sortContainersByVersions(sortedByName)
}
