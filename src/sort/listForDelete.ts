import {Container} from "../models/container";
import {CONFIG} from "../config";

export function deleteList(sortedContainers: Record<string, Container[]>): string[] {
    const resultArr: string[] = []

    for (let name in sortedContainers) {
        if (sortedContainers[name].length > CONFIG.COUNT) {
            const arrayForDelete = sortedContainers[name].slice(CONFIG.COUNT)

            console.log(name)
            console.log(arrayForDelete.map(c => c.version))

            const arrayId = arrayForDelete.map(container => container.id)

            resultArr.push(...arrayId)
        }
    }

    return resultArr
}
