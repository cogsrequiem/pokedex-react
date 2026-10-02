import type SortButtons from "../types/sort-buttons";

export function ResetSortingButton({handleClick}: SortButtons) {

    return (<>
    
    <button onClick={handleClick} value="Reset" className="reset-sort button-sort-reset">Reset</button>
    </>)
}