import type Base from "./base";
import type Name from "./name";

export default interface IPokemons{
    id: number,
    name: Name,
    imgSrc: string,
    base: Base,
    type: string[]
}