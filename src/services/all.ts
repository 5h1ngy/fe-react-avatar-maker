import mock from "./all.mock";
import { ResponseData } from "./all.types";

export async function getAll(): Promise<ResponseData> {
    return await new Promise((resolve, _reject) => setTimeout(() => resolve(mock), 1000));
}