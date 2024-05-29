import { IngredientType } from "../../utils/types";

export const BURGER_CONSTRUCTOR_ADD_INGREDIENT = 'BURGER_CONSTRUCTOR_ADD_INGREDIENT';
export const BURGER_CONSTRUCTOR_CHANGE_ROLL = 'BURGER_CONSTRUCTOR_CHANGE_ROLL';
export const BURGER_CONSTRUCTOR_DELETE_INGREDIENT = 'BURGER_CONSTRUCTOR_DELETE_INGREDIENT';


export interface IBURGER_CONSTRUCTOR_ADD_INGREDIENT {
    readonly type: typeof BURGER_CONSTRUCTOR_ADD_INGREDIENT;
    readonly ingredient: IngredientType;
}

export interface IBURGER_CONSTRUCTOR_CHANGE_ROLL {
    readonly type: typeof BURGER_CONSTRUCTOR_CHANGE_ROLL;
    readonly roll: IngredientType;
}

export interface IBURGER_CONSTRUCTOR_DELETE_INGREDIENT {
    readonly type: typeof BURGER_CONSTRUCTOR_DELETE_INGREDIENT;
    readonly index: number;
}



export type TBurgerConstructorActions =
IBURGER_CONSTRUCTOR_ADD_INGREDIENT |
IBURGER_CONSTRUCTOR_CHANGE_ROLL |
IBURGER_CONSTRUCTOR_DELETE_INGREDIENT;