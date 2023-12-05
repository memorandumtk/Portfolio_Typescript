"use client"
import React, { createContext, useContext, useRef, useState, ReactNode } from 'react';

interface VisibilityContextType {
    isVisible: boolean;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
    targetRef: React.RefObject<HTMLParagraphElement>;
}

const VisibilityContext = createContext<VisibilityContextType | undefined>(undefined);

export const useVisibility = (): VisibilityContextType => {
    const context = useContext(VisibilityContext);
    if (!context) {
        throw new Error('useVisibility must be used within a VisibilityProvider');
    }
    return context;
};

export const VisibilityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const targetRef = useRef<HTMLParagraphElement>(null);

    return (
        <VisibilityContext.Provider value={{ isVisible, setIsVisible, targetRef }}>
            {children}
        </VisibilityContext.Provider>
    );
};
