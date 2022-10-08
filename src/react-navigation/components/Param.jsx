import React from "react";
import { useParams, useSearchParams } from 'react-router-dom'

const Param = () => {
    let param = useParams();
    return <p> Params ID : {param.id}</p>
};

const SearchParam =() => {
    const [search, setSearch] = useSearchParams();
    
    // Get query from url
    const qkey = search.get("key")

    // Set query manual
    // setSearch({key:"manual"})
    // console.log(`your query: ${search}`);

    // let params = serializeFormQuery(e.target);
    // setSearch(params)

    return (
        <div>
            <p>{`your query: ${qkey}`}</p>
        </div>
    )
};


export {Param, SearchParam};