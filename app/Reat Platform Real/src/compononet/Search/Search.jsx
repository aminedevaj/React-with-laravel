import React, { useState } from 'react'
import './Search.css'

const types = ["Buy", "Rent"]
const Search = () => {

    const [query, setQuery] = useState({
        type: "Buy",
        Location: "",
        minPrice: 0,
        maxPrice: 0,
    })
    const switchType = (val) => {
        setQuery((prev) => ({ ...prev, type: val }))


    }
    return (

        <div className="searchBar">
            <div className="type">

                {types.map((type) => (

                    <button key={type} onClick={() => switchType(type)} className={query.type === type ? "active" : ""}>
                        {type}
                    </button>
                ))}









            </div>
            <form action="">
                <input type="text" name="location" id="" placeholder='City Location' />
                <input type="number" name="minprice" id="" min={0} max={10000000} placeholder='Min Price' />
                <input type="number" name="maxprice" id="" min={0} max={10000000} placeholder='Max Price' />
                <button>
                    <img src="/search.png" alt="" />
                </button>

            </form>
        </div>


    )
}

export default Search