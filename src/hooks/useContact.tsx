import { useEffect, useState } from 'react'

function useContact() {
    const [content, setContent] = useState<any>();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/contact-information?populate=*`)
            .then((response) => response.json())
            .then((data) => {
                setContent(data.data)
            })
    }, [])

    return {
        content
    }
}

export default useContact