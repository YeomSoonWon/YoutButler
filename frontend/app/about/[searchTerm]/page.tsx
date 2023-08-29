import React from 'react'
import {useRouter} from "next/navigation";

type Props = {
    params: {
        searchTerm: string,
    },
}

type SearchDataType = {
    place_id: 298418871,
    licence: string,
    osm_type: string,
    osm_id: number,
    boundingbox: Array<string>,
    lat: string,
    lon: string,
    display_name: string,
    class: string,
    type: string,
    importance: number,
    icon: string,
}
const search = async (searchTerm: string) => {
    const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${searchTerm}&format=json`,
    )
    if (!res) return null
    const data: SearchDataType[] = await res.json()
    return data
}

const SearchResult=async({ params: { searchTerm } }: Props)=> {
    // useEffect 대신 서버단에서 async/await 메서드로 데이터 페칭 가능
    const searchResults = await search(searchTerm);
    console.log(searchResults);
    return (
        <div>
            you entered :<span>{searchTerm}</span>
            <ol>
                {searchResults?.map(result => (
                    <li key={result.place_id}>
                        <p>{result.display_name}</p>
                        <p>
                            lat: {result.lat} / lon: {result.lon}
                        </p>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default SearchResult;
