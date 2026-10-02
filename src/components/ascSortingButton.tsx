import type SortButtons from "../types/sort-buttons";

export default function AscSortingButton({handleClick}: SortButtons) {

    return ( <>
    <button onClick={handleClick} className="AZ-sort button-sort">A-Z</button>
    </>)
}