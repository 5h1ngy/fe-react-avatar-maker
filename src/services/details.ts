import axios from "axios";
import mock from "./details.mock";
import { ResponseData } from "./details.types";

// Flag per abilitare la modalità mock (esempio: da variabile di ambiente)
const isMockMode = import.meta.env.VITE_USE_MOCK === "true";

export async function getDetails(payload: { id: string }): Promise<ResponseData> {

    if (isMockMode) {
        console.log("Modalità Mock attiva. Restituisco dati mock.");
        return new Promise((resolve) =>
            setTimeout(() => resolve({ ...mock }), 1000)
        );
    }

    try {
        // Chiamata al servizio tramite Axios
        const response = await axios.get<ResponseData>(`/api/anime/details/${payload.id}`);

        // Estrazione dei tipi e ritorno dei dati
        const dataWithTypes = {
            ...response.data,
        };

        return dataWithTypes;
    } catch (error) {
        console.error("Errore durante la chiamata al servizio, uso mock:", error);

        // Fallback ai dati mock in caso di errore
        return {
            ...mock,
        };
    }
}
