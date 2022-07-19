const config = require('../config')

module.exports = function (sortedContainers) {
    const resultArr = []

    for (let name in sortedContainers) {
        if (sortedContainers[name].length > config.COUNT) {
            resultArr.push(...(sortedContainers[name].slice(config.COUNT).map(el => el.id)))
        }
    }

    return resultArr
}
