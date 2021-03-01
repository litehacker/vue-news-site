import {
    createStore,
    Store as VuexStore,
    CommitOptions,
    DispatchOptions,
    createLogger,
} from "vuex";

import { actions, Actions } from "./actions";
import { mutations, Mutations } from "./mutations";
import { getters, Getters } from "./getters";

import { ItemInterface } from "./types";

export { MutationTypes } from "./mutations";
export { ActionTypes } from "./actions";

export type State = {
    items: Array<ItemInterface>;
};

const state: State = {
    items: [],
};

export type Store = Omit<
    VuexStore<State>,
    "commit" | "getters" | "dispatch"
> & {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
        key: K,
        payload?: P,
        options?: CommitOptions
    ): ReturnType<Mutations[K]>;
} & {
    getters: {
        [K in keyof Getters]: ReturnType<Getters[K]>;
    };
} & {
    dispatch<K extends keyof Actions>(
        key: K,
        payload: Parameters<Actions[K]>[1],
        options?: DispatchOptions
    ): ReturnType<Actions[K]>;
};

const plugins = [];

if (process.env.NODE_ENV === "development") {
    plugins.push(createLogger());
}

const store = createStore({
    state,
    mutations,
    actions,
    getters,
    plugins,
});

export function useStore() {
    return store as Store;
}

export default store;
