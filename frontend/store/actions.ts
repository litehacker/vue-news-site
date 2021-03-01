import Axios from "axios";

import { ActionContext, ActionTree } from "vuex";
import { Mutations, MutationTypes } from "./mutations";
import { ItemInterface } from "./types";
import { State } from ".";

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload?: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, "commit">;

export enum ActionTypes {
    GET_ITEMS = "GET_ITEMS",
}

export interface Actions {
    [ActionTypes.GET_ITEMS]({
        commit,
    }: AugmentedActionContext): Promise<Array<ItemInterface>>;
}

export const actions: ActionTree<State, State> & Actions = {
    async [ActionTypes.GET_ITEMS]({ commit }) {
        try {
            const response = await Axios({
                method: "GET",
                url: "/api/items/",
            });
            let items = response.data.items;
            if (Array.isArray(items)) {
                commit(MutationTypes.SET_ITEMS, items);
            }
            return items;
        } catch (e) {
            return [];
        }
    },
};
