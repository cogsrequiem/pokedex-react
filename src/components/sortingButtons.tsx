export default function SortingButtons() {


    return (<>
                <section className="section-tri">
                    <p className="p-sort">Trier par:</p>
                    <button className="AZ-sort button-sort">A-Z</button>
                    <button className="ZA-sort button-sort">Z-A</button>
                    <button className="desc-asc-sort button-sort">Numéro</button>
                    <button className="reset-sort button-sort-reset">Reset</button>
                </section>
            
            </>)
}