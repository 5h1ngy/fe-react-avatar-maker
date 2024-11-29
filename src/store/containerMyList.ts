import { Middleware } from '@reduxjs/toolkit';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getReferences } from '@/services/anime';
import { Item } from "@/services/anime.types";

export enum STATUS {
    IDLE,
    LOADING,
    SUCCESS,
    FAILED
}

export enum STATUS_REFERENCE {
    TO_WATCH,
    WATCHING,
    COMPLETE,
}

export interface Reference {
    id: string,
    status: STATUS_REFERENCE,
}

export interface State {
    references: Array<Reference>,
    anime: {
        occurrences: Array<Item>,
        status: STATUS;
        error: any;
    }
}

export const saveReferencesMiddleware: Middleware = (store) => (next) => (action) => {
    const result = next(action); // Passa l'azione al prossimo middleware/reducer

    // Controlla se lo stato `references` è cambiato
    const state = store.getState();
    const references = state.containerMyList.references; // Assicurati che il percorso dello stato sia corretto

    // Salva `references` nel localStorage
    localStorage.setItem('references', JSON.stringify(references));

    return result; // Ritorna il risultato dell'azione
};

// Definisci la chiamata asincrona per ottenere i dati dal server
const doGetReferences = createAsyncThunk(
    'container/my-list/doGetReferences',
    async (_, thunkAPI) => {

        const state = <Record<string, any>>thunkAPI.getState();
        const references: Array<Reference> = state.containerMyList.references;

        return await getReferences({ ids: references.map(reference => reference.id) });
    }
);

const myListSlice = createSlice({
    name: 'container/my-list',
    initialState: {
        references: JSON.parse(localStorage.getItem('references') || "[]"),
        anime: {
            status: STATUS.IDLE,
            error: null,
            occurrences: [],
        }
    } as State,
    reducers: {
        updateStatus: (state, action) => {
            const index = state.references.findIndex(occurrence => occurrence.id === action.payload.id);
            if (index !== -1) {
                state.references[index].status = action.payload.status;
            }
        },
        setReference: (state, action) => {
            state.references = action.payload;
        },
        addReference: (state, action) => {
            const index = state.references.findIndex(occurrence => occurrence.id === action.payload.id);
            if (index === -1) {
                state.references.push(action.payload);
            }
        },
        removeReference: (state, action) => {
            state.references = state.references.filter(occurrence => occurrence.id !== action.payload.id);
        },
        clearReferences: (state) => {
            state.references = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(doGetReferences.pending, (state) => {
                state.anime.status = STATUS.LOADING;
            })
            .addCase(doGetReferences.fulfilled, (state, action) => {
                state.anime.status = STATUS.SUCCESS;
                state.anime.occurrences = action.payload.occurrences;
            })
            .addCase(doGetReferences.rejected, (state, action) => {
                state.anime.status = STATUS.FAILED;
                state.anime.error = action.error.message;
            });
    },
});

export const actions = {
    ...myListSlice.actions,
    doGetReferences,
};

export default myListSlice.reducer;
