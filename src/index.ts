import {getComponentList} from "./requests/getList";
import {sortContainers} from "./sort/sort";
import {deleteList} from "./sort/listForDelete";
import {deleteContainers} from "./requests/deleteRequest";

async function run() {
    const listOfContainers = await getComponentList()
    const sorted = sortContainers(listOfContainers)
    const idsForDelete = deleteList(sorted)
    await deleteContainers(idsForDelete)
}

run()
