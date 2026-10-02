import type SortButtons from "../types/sort-buttons";
import AscSortingButton from "./ascSortingButton";
import { DescSortingButton } from "./descSortingButton";
import NumberSortingButton from "./numberSortingButton";
import { ResetSortingButton } from "./resetStortingButton";

export default function SortingButtons({handleClick}: SortButtons) {


    return (<>
                <section className="section-tri">
                    <p className="p-sort">Trier par:</p>
                    <AscSortingButton handleClick={handleClick}/>
                    <DescSortingButton handleClick={handleClick}/>
                    <NumberSortingButton handleClick={handleClick}/>
                    <ResetSortingButton  handleClick={handleClick}/>
                </section>
            
            </>)
}