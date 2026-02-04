import { useRouter } from 'next/navigation';
import React, { use, useEffect } from 'react';

const Dadhboard = () => {
    const [isTokenThere, setIsTokenThere] = React.useState(false)
    const router = useRouter()
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            // router.push('/login')
            router.replace('/login')
        }
        setIsTokenThere(true)
    })
    useEffect(() => {
        if (isTokenThere) {
            setIsTokenThere(true);
        }
    },[isTokenThere])
    return (
        <div>
            Dashboard
        </div>
    );
};

export default Dadhboard;