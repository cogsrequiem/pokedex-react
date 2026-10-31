import type SortButtons from "../types/sort-buttons";
import '../App.css'

export default function AscSortingButton({activeMode, handleClick}: SortButtons) {

  
    return ( <>
    <button onClick={handleClick} value="asc" className={`AZ-sort button-sort ${activeMode === "A-Z" ? "button-sort-toggled" : ""}`}>A-Z</button>
    </>)
}