import {Container} from "./container";

export interface Response {
    items: Container[];
    continuationToken: string | null;
}
