import { MutationTree } from "vuex";

import { ItemInterface } from "./types";

import { State } from ".";

export enum MutationTypes {
    SET_ITEMS = "SET_ITEMS",
}

export type Mutations<S = State> = {
    [MutationTypes.SET_ITEMS](state: S, payload: Array<ItemInterface>): void;
};

export const mutations: MutationTree<State> & Mutations = {
    [MutationTypes.SET_ITEMS](state, payload) {
        state.items = payload;
    },
};
