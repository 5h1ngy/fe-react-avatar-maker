import { createSlice } from '@reduxjs/toolkit';
import { OptionKeys, SelectedOptions } from "./containerMaker.types";

export type State = Partial<SelectedOptions>

const slice = createSlice({
    name: 'container/make',
    initialState: {
        mouth: [],
        nose: [],
        eyes: [],
        eyebrows: [],
        facialHair: [],
        clothing: [],
        top: [],
        accessories: [],
        clothingGraphic: [],
    } as State,
    reducers: {
        updateOption: (state, action) => {
            const value = action.payload.value;

            // Regex per verificare se il valore è un colore esadecimale
            const hexColorRegex = /^#[0-9A-Fa-f]{6}$/;
            // Regex per verificare se il valore è solo un numero
            const numericRegex = /^\d+$/;

            // Se il valore è composto solo da numeri, assegnalo direttamente (non come array)
            if (numericRegex.test(value)) {
                state[action.payload.id as OptionKeys] = value;
            } else {
                if (hexColorRegex.test(value)) {
                    // Se è un colore esadecimale, rimuovi il primo carattere (#)
                    state[action.payload.id as OptionKeys] = [value].map((item) =>
                        item === value ? value.slice(1) : item
                    );
                } else {
                    // Altrimenti, assegna i valori aggiornati normalmente
                    state[action.payload.id as OptionKeys] = [value];
                }
            }
        },
    },
});

export const actions = {
    ...slice.actions,
};

export default slice.reducer;
