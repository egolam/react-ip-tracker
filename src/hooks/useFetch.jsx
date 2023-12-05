import { useEffect, useState } from 'react'

export const useFetch = (searchIp) => {

    const [data, setData] = useState([]);

    useEffect(() => {

        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=InsertYourApiKey&ipAddress=${searchIp}`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err));

    }, [searchIp])

    return data;

}

