import type SortButtons from "../types/sort-buttons";
import '../App.css'

export function ResetSortingButton({ handleClick}: SortButtons) {

    return (<>
    
    <button onClick={handleClick} value="Reset" className={`reset-sort`}>Reset</button>
    </>)
}