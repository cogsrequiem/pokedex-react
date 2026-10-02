import type SortButtons from "../types/sort-buttons";

export function DescSortingButton({handleClick}: SortButtons) {

    return (<>
    <button onClick={handleClick} className="ZA-sort button-sort">Z-A</button>
    </>)
}