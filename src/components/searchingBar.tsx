


export default function SearchingBar({onChange, value}) {

   

    return (<>

    
        <section>
          <div className="flex-search">
            <label htmlFor="search-pokemon">Search your Pokemon</label>
            <input
              onChange = {onChange}
              value={value}
              placeholder="example: Ivysaur..."
              type="search"
              name=""
              id="search-pokemon"
            />
          </div>
        </section>
    </>
    )
}