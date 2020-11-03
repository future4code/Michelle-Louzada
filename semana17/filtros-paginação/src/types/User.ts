export enum TYPES_USERS {
    TEACHER = "Teacher",
    CX = "CX",
    OPERATIONS = "Operations"
 }

export type User = {
    id: number,
    name: string,
    email: string,
    type: TYPES_USERS
 }