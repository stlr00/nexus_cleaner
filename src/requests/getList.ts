import {CONFIG} from "../config";
import {Container} from "../models/container";
import {Response} from "../models/response";


export async function getComponentList(): Promise<Container[]> {
    const listOfContainers: Container[] = []
    let continuationTokeResponse = ''

    do {
        const resp = await fetch(CONFIG.URL_GET + continuationTokeResponse, {
            headers: CONFIG.headers
        })

        const data = (await resp.json()) as Response
        listOfContainers.push(...data.items)
        continuationTokeResponse = data.continuationToken

        if (continuationTokeResponse !== null) {
            continuationTokeResponse = '&continuationToken=' + continuationTokeResponse
        }

    } while (continuationTokeResponse != null)

    return listOfContainers
}
