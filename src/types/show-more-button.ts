import type IPokemons from "./pokemons";

export default interface ShowMoreButton{
    handleVisiblePokemons: (e: React.MouseEvent<HTMLButtonElement>) => void;
    visiblePokemon: IPokemons[]
}