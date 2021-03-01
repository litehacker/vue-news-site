import { GetterTree } from "vuex";

import { ItemInterface } from "./types";

import { State } from ".";

export type Getters = {
    getitems(state: State): Array<ItemInterface>;
};

export const getters: GetterTree<State, State> & Getters = {
    getitems: (state) => {
        return state.items;
    },
};
