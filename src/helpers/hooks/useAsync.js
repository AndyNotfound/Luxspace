import { useState, useCallback } from 'react'

const defaultState = {
    data: null,
    status: "Idle",
    error: null
}

export default function useAsync(initialState) {
    const [{data, status, error}, setState] = useState({...defaultState,...initialState})

    const run = useCallback(
        (promise) => {
            if(!promise || !promise.then)
            throw new Error("It's not a promise");
            setState({status: "Pending"})
            return promise.then(
                (data) => {
                    setState({data, status:"Resolved"})
                    return data;
            },
                (error) => {
                    setState({status:"Rejected", error: JSON.parse(error.message)})
                }
            )
        }, [setState]
    )

    return {
        data,
        error,
        status,
        run
    }
}