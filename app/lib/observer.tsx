import React, { createContext, useContext, useState, ReactNode, useRef, useEffect, RefObject } from 'react';

interface ObserverContextType {
    observeElement: (element: HTMLElement) => void;
    unobserveElement: (element: HTMLElement) => void;
    isVisible: boolean;
}

const ObserverContext = createContext<ObserverContextType | undefined>(undefined);

export const useObserver = (): ObserverContextType => {
    const context = useContext(ObserverContext);
    if (!context) {
        throw new Error('useObserver must be used within ObserverProvider');
    }
    return context;
};

export const ObserverProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 } // Adjust as needed
        );

        return () => {
            observerRef.current?.disconnect();
        };
    }, []);

    const observeElement = (element: HTMLElement) => {
        observerRef.current?.observe(element);
    };

    const unobserveElement = (element: HTMLElement) => {
        observerRef.current?.unobserve(element);
    };

    return (
        <ObserverContext.Provider value={{ observeElement, unobserveElement, isVisible }}>
            {children}
        </ObserverContext.Provider>
    );
};
