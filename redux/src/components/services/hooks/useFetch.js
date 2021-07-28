import { useState, useEffect } from "react"

const useFetch = (url) => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
          setData(data)
        })
        .catch(err => console.log(err))
        .finally(() => {
        })
      }, [url])

    return { data };
}

export default useFetch
