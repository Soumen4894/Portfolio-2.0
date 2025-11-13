import React, { useRef, useEffect, useState } from 'react'
import dingSound from '../assets/ding.mp3';

const PopupDemo = () => {
    const audioRef = useRef(null);
    const [timeLeft, setTimeLeft] = useState(5);

    useEffect(() => {
        // Update countdown every second
        const countInterval = setInterval(() => {
            setTimeLeft((prev) => prev > 0 ? prev - 1 : 0);
        }, 1000);

        // Play audio after 5 seconds
        const timer = setTimeout(() => {
            audioRef.current?.play();
            console.log(audioRef.current);
        }, 5000);

        // Cleanup on unmount
        return () => {
            clearTimeout(timer);
            clearInterval(countInterval);
        };
    }, []);

    return (
        <>
            <div>Audio will play in {timeLeft} seconds...</div>
            <audio ref={audioRef} src={dingSound} />
        </>
    )
}

export default PopupDemo