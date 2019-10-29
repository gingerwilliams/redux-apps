import { schema, normalize } from "normalizr";
import defaultState from "./default-state.json";

//create schemas
const board = new schema.Entity("boards");

// run it through the normalization
const normalizedBoard = normalize(defaultState.boards, [board]);

//export our data object
// console.log(normalizedBoard);

export const boards = {
    entities: normalizedBoard.entities.boards,
    ids: normalizedBoard.result
};
