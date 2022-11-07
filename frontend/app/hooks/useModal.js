import { useCallback, useMemo, useState } from "react"

export const useModal = () => {
    const [showModalone,setShowModalone] = useState(false)
    const [showModaltwo,setShowModaltwo] = useState(false)
    const [showModalthree,setShowModalthree] = useState(false)
    
    const checkModal = (category) => {
        if (category == 'underpants_slim') {
            setShowModalone(true)
        }

        if (category == 'underpants_classic') {
            setShowModaltwo(true)
        }

        if (category == 'buff') {
            setShowModalthree(true)
        }
    }

    const close = () => {
        setShowModalone(false)
        setShowModaltwo(false)
        setShowModalthree(false)
    }
    return useMemo(()=>({checkModal,close,showModalone,showModaltwo,showModalthree}) ) 
}