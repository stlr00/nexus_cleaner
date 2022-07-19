import {CONFIG} from "../config";

export async function deleteContainers(listOfIds: string[]) {
    for (const id of listOfIds) {
        await fetch(CONFIG.URL_DELETE + id, {
            method: 'DELETE',
            headers: CONFIG.headers
        })
    }
}
