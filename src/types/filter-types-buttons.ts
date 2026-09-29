import type IPokemonTypes from "./pokemon-types";

export default interface FilterTypesButtonsProps {
    pokemonTypes: IPokemonTypes[],
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}