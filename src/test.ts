import {getComponentList} from "./requests/getList";
import {sortContainers} from "./sort/sort";
import {deleteList} from "./sort/listForDelete";


async function test() {
    const listOfContainers = await getComponentList()
    const sorted = sortContainers(listOfContainers)
    const idsForDelete = deleteList(sorted)
    console.log(idsForDelete)
}

test()
