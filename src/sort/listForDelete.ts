import {Container} from "../models/container";
import {CONFIG} from "../config";

export default function (sortedContainers: Record<string, Container[]>): string[] {
    const resultArr: string[] = []

    for (let name in sortedContainers) {
        if (sortedContainers[name].length > CONFIG.COUNT) {
            resultArr.push(...(sortedContainers[name].slice(CONFIG.COUNT).map(el => el.id)))
        }
    }

    return resultArr
}
