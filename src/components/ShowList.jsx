import React from 'react'
import useApiData from '../customeHook/useApiData'

function ShowList() {
    const { apiData = [] } = useApiData([]);
    return (
        <div>{apiData?.map((item) => {
            return <div key={item.name.common}>{item.name.common}</div>
        })}</div>
    )
}

export default ShowList