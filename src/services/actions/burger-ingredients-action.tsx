import { IngredientType } from '../../utils/types';

export const BURGER_INGREDIENTS_INITIAL = 'BURGER_INGREDIENTS_INITIAL';
export const BURGER_INGREDIENTS_INITIAL_SUCCESS = 'BURGER_INGREDIENTS_INITIAL_SUCCESS';
export const BURGER_INGREDIENTS_INITIAL_FAILED = 'BURGER_INGREDIENTS_INITIAL_FAILED';
export const BURGER_INGREDIENTS_CHANGE_TAB = 'BURGER_INGREDIENTS_CHANGE_TAB';
export const BURGER_INGREDIENTS_INCREASE_INGREDIENT = 'BURGER_INGREDIENTS_INCREASE_INGREDIENT';
export const BURGER_INGREDIENTS_DECREASE_INGREDIENT = 'BURGER_INGREDIENTS_DECREASE_INGREDIENT';
export const BURGER_INGREDIENTS_CHANGE_ROLL = 'BURGER_INGREDIENTS_CHANGE_ROLL';
export const BURGER_INGREDIENTS_CLEAR = 'BURGER_INGREDIENTS_CLEAR';




export interface IBURGER_INGREDIENTS_INITIAL {
    readonly type: typeof BURGER_INGREDIENTS_INITIAL;
}

export interface IBURGER_INGREDIENTS_INITIAL_SUCCESS {
    readonly type: typeof BURGER_INGREDIENTS_INITIAL_SUCCESS;
    readonly rolls: IngredientType[];
    readonly fillings: IngredientType[];
    readonly sauces: IngredientType[];
}
export interface IBURGER_INGREDIENTS_INITIAL_FAILED {
    readonly type: typeof BURGER_INGREDIENTS_INITIAL_FAILED;
}

export interface IBURGER_INGREDIENTS_CHANGE_TAB {
    readonly type: typeof BURGER_INGREDIENTS_CHANGE_TAB;
    readonly tab: string;
}

export interface IBURGER_INGREDIENTS_INCREASE_INGREDIENT {
    readonly type: typeof BURGER_INGREDIENTS_INCREASE_INGREDIENT;
    readonly increaseIngredient: IngredientType;
}
export interface IBURGER_INGREDIENTS_DECREASE_INGREDIENT {
    readonly type: typeof BURGER_INGREDIENTS_DECREASE_INGREDIENT;
    readonly decreaseIngredient: IngredientType;
}
export interface IBURGER_INGREDIENTS_CHANGE_ROLL {
    readonly type: typeof BURGER_INGREDIENTS_CHANGE_ROLL;
    readonly changeRoll: IngredientType;
}

export interface IBURGER_INGREDIENTS_CLEAR {
    readonly type: typeof BURGER_INGREDIENTS_CLEAR;
}


export type TBurgerIngredientsActions =
    IBURGER_INGREDIENTS_INITIAL |
    IBURGER_INGREDIENTS_CHANGE_TAB |
    IBURGER_INGREDIENTS_INCREASE_INGREDIENT |
    IBURGER_INGREDIENTS_DECREASE_INGREDIENT |
    IBURGER_INGREDIENTS_INITIAL_SUCCESS |
    IBURGER_INGREDIENTS_INITIAL_FAILED |
    IBURGER_INGREDIENTS_CHANGE_ROLL | 
    IBURGER_INGREDIENTS_CLEAR;