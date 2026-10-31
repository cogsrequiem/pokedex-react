import type SortButtons from "../types/sort-buttons";
import '../App.css'

export function DescSortingButton({activeMode, handleClick}: SortButtons) {

    return (<>
    <button onClick={handleClick} value="desc" className={`ZA-sort button-sort ${activeMode === "Z-A" ? "button-sort-toggled" : ""}`}>Z-A</button>
    </>)
}