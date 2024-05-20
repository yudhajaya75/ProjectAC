// Founding.tsx
import { useState, useEffect } from 'react';
import Desktop from './Desktop';
import Mobile from './mobile';
import './sosmed.css'

const Founding = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowWidth <= 440 ? <Mobile /> : <Desktop />;
};

export default Founding;
