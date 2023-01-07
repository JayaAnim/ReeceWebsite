import { useState, useEffect } from "react";

const useOnScreen = (ref) => {
    const [isOnScreen, setIsOnScreen] = useState(false);

    const observer = new IntersectionObserver((([entry]) => {
       setIsOnScreen(entry.isIntersecting);
    }), {
        threshold: 0.55
    });

    useEffect(() => {
        observer.observe(ref.current);
        
        return () => observer.disconnect();
    })

    return isOnScreen;
}

export default useOnScreen