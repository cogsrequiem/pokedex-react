

export default function SearchingBar() {

    return (<>

    
        <section>
          <div className="flex-search">
            <label htmlFor="search-pokemon">Search your Pokemon</label>
            <input
              placeholder="exemple: Herbizarre..."
              type="search"
              name=""
              id="search-pokemon"
            />
          </div>
        </section>
    </>
    )
}