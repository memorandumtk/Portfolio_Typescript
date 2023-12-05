import { useEffect } from 'react';
import { useVisibility } from './visibilityContext'; // Adjust the import path as needed

export const useOnScreen = (): void => {
    const { targetRef, setIsVisible } = useVisibility();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        };
    }, [targetRef, setIsVisible]);
};
