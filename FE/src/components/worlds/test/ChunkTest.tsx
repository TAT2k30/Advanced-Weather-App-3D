import React, { useEffect, useState } from 'react';

function ChunkTest() {
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [height, setHeight] = useState<number>(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);


        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            Current width: {width}px
            <br />
            Current height: {height}px
        </div>
    );
}

export default ChunkTest;
