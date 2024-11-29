import axios from "axios";
import mockNewest from "./newest.mock";
import mockTypes from "./types.mock";
import { ResponseData } from "./anime.types";

// Flag per abilitare la modalità mock (esempio: da variabile di ambiente)
const isMockMode = import.meta.env.VITE_USE_MOCK === "true";

export async function getNewest(payload: { page: number, limit: number, type?: string }): Promise<ResponseData> {

    if (isMockMode) {
        console.log("Modalità Mock attiva. Restituisco dati mock.");
        return new Promise((resolve) => setTimeout(() => resolve(mockNewest), 1000));
    }

    try {
        // Chiamata al servizio tramite Axios
        let defaultQuery = `/api/anime?offset=${payload.page}&size=${payload.limit}`;
        if (payload.type) defaultQuery = defaultQuery + `&type=${payload.type}`
        const response = await axios.get<ResponseData>(defaultQuery);

        // Estrazione dei tipi e ritorno dei dati
        const dataWithTypes = { ...response.data };

        return dataWithTypes;
    } catch (error) {
        console.error("Errore durante la chiamata al servizio, uso mock:", error);

        throw new Error(<string>error)
    }
}

export async function getTypes(): Promise<Array<string>> {

    if (isMockMode) {
        console.log("Modalità Mock attiva. Restituisco dati mock.");
        return new Promise((resolve) => setTimeout(() => resolve(mockTypes), 1000));
    }

    try {
        // Chiamata al servizio tramite Axios
        const response = await axios.get<Array<string>>(`/api/anime/types`);

        // Estrazione dei tipi e ritorno dei dati
        const dataWithTypes = response.data;

        return dataWithTypes;
    } catch (error) {
        console.error("Errore durante la chiamata al servizio, uso mock:", error);

        throw new Error(<string>error)
    }
}

export async function getReferences(payload: { ids: Array<string> }): Promise<ResponseData> {

    if (isMockMode) {
        console.log("Modalità Mock attiva. Restituisco dati mock.");
        return new Promise((resolve) => setTimeout(() => resolve(mockNewest), 1000));
    }

    try {
        // Chiamata al servizio tramite Axios
        const response = await axios.post<ResponseData>(
            `/api/anime`,
            { ids: payload.ids }
        );

        // Estrazione dei tipi e ritorno dei dati
        const dataWithTypes = { ...response.data };

        return dataWithTypes;
    } catch (error) {
        console.error("Errore durante la chiamata al servizio, uso mock:", error);

        throw new Error(<string>error)
    }
}

