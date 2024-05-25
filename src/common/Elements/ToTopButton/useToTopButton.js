import { useState, useEffect } from 'react';

export const useToTopButton = () => {
    const [isHidden, setIsHidden] = useState(true);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsHidden(false);
        } else {
            setIsHidden(true);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return { scrollToTop, isHidden };
};