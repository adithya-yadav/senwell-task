import React, { useEffect, useState } from 'react'
import axios from 'axios'

function useApiData() {
    const [apiData, setApiData] = useState([])
    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then((res) => {
            setApiData(res.data.slice(0, 10))
        })
    }, [])
  return {apiData}
}

export default useApiData