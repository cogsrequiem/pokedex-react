import type SortButtons from "../types/sort-buttons";
import AscSortingButton from "./ascSortingButton";
import { DescSortingButton } from "./descSortingButton";
import { ResetSortingButton } from "./resetStortingButton";

export default function SortingButtons({activeMode, handleClick}: SortButtons,) {


    return (<>
                <section className="section-tri">
                    <p className="p-sort">Trier par:</p>
                    <AscSortingButton activeMode={activeMode} handleClick={handleClick}/>
                    <DescSortingButton activeMode={activeMode}  handleClick={handleClick}/>
                    <ResetSortingButton  activeMode={activeMode}  handleClick={handleClick}/>
                </section>
            
            </>)
}