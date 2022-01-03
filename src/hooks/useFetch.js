import { useState, useEffect } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {

        const controller = new AbortController()

        const fetchData = async () => {

            setIsPending(true)

            try{

                console.log("url");
                console.log(controller);
                console.log(url);

                const res = await fetch(url, { 
                    signal: controller.signal
                    }) 

                if(!res.ok){
                    throw new Error(res.statusText)
                }

                const data = await res.json()

                console.log("data");
                console.log(data);

                setIsPending(false)
                setData(data)
                setError(null)

            }catch(err){

                if(err.name == "AbortError"){
                    console.log("Fetching was Aborted");
                }else{
                    setIsPending(false)
                    setError("Could not fetch the data");
                }

            }
        }

        fetchData()
        
        return() => {
            controller.abort()
        }

    },[url])

   
    return {data, isPending, error}
}
