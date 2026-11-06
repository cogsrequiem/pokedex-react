import type ShowMoreButton from "../types/show-more-button";

export default function ShowMore(props: ShowMoreButton) {

    return (<>

        <button onClick={props.handleVisiblePokemons}>Show more...</button>
    </>)
}