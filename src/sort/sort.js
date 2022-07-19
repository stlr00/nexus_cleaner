function sortContainersByName(listOfContainers) {
    const containersByName = {}
    let regexp = /[A-Z]/gi;

    for (let i = 0; i < listOfContainers.length; i++) {
        if (containersByName[listOfContainers[i].name] === undefined) {
            if (listOfContainers[i].version.substr(0, 1).match(regexp)) {
                containersByName[listOfContainers[i].name] = [listOfContainers[i]]
            }
        } else {
            if (listOfContainers[i].version.substr(0, 1).match(regexp)) {
                containersByName[listOfContainers[i].name].push(listOfContainers[i])
            }
        }
    }
    return containersByName
}


function sortContainersByVersions(objectWithContainers) {
    for (const name in objectWithContainers) {
        const arr = objectWithContainers[name]

        arr.sort((a, b) => b.version.replace(/\d+/g, n => +n + 100000)
            .localeCompare(a.version.replace(/\d+/g, n => +n + 100000))
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
