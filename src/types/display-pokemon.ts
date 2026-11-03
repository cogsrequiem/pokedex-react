
import type IPokemons from "./pokemons";

export default interface DisplayPokemonProps{
    pokemons: IPokemons[],
    isLoading: boolean
    isLoadingTypes: boolean
}