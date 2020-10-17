export const ADD_BOX = 'ADD_BOX';
export const REMOVE_BOX = 'REMOVE_BOX';


export function addBox(box){
    return {
        type : ADD_BOX,
        box
    }
}

export function removeBox(box){
    return {
        type : REMOVE_BOX,
        box
    }
}