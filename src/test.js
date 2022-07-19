const getComponentList = require("./requests/getList");
const sortContainers = require('./sort/sort')
const deleteList = require('./sort/listForDelete')

async function test() {
    const listOfContainers = await getComponentList()
    const sorted = sortContainers(listOfContainers)
    const idsForDelete = deleteList(sorted)
    console.log(sorted)
}

test()