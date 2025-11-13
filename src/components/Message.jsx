import React, { useContext, useEffect, useRef, useState } from 'react';
import dingSound from '../assets/ding.mp3';
import { motion, AnimatePresence } from 'framer-motion';
import { themeContext } from '../context/Context';

const Message = () => {

    const { theme } = useContext(themeContext);
    const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
    const borderColor = theme === 'dark' ? 'border-yellow-50/30' : 'border-gray-900/30';
    const backdrop = theme === 'dark' ? 'backdrop-blur-sm bg-white/10' : 'backdrop-blur-sm bg-white/60';
    const gradient = theme === 'dark' ? 'from-fuchsia-600 to-yellow-700' : 'from-green-200 to-yellow-200';

    const [hasInteracted, setHasInteracted] = useState(false);
    const [timer, setTimer] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        const handleInteraction = () => {
            setHasInteracted(true);
            // Remove listeners after first interaction
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
            window.removeEventListener('pointerdown', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
        };

        window.addEventListener('click', handleInteraction);
        window.addEventListener('keydown', handleInteraction);
        window.addEventListener('pointerdown', handleInteraction);
        window.addEventListener('touchstart', handleInteraction);

        return () => {
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
            window.removeEventListener('pointerdown', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
        };
    }, []);
    useEffect(() => {
        if (hasInteracted) {
            const timerId = setTimeout(() => {
                setTimer(true);
                console.log("Printing after 5 seconds of interaction:", hasInteracted);
                console.log("Playing sound");
                audioRef.current?.play();
            }, 5000);

            return () => clearTimeout(timerId);
        }
    }, [hasInteracted]);

    if(timer == true){
        setTimeout(() => {
            setTimer(false);
            setHasInteracted(false);
        }, 10000);
    } 


    return (
        <>
            <audio ref={audioRef} src={dingSound} />
            <AnimatePresence>
                {timer && (
                    <motion.div
                        initial={{ opacity: 0, y: 60, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 60, scale: 0.9 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className={`fixed bottom-4 right-4 flex items-center gap-3 sm:gap-4
                bg-gradient-to-r ${gradient} 
                ${textColor} px-4 py-3 sm:px-5 sm:py-4 rounded-2xl shadow-2xl
                border ${borderColor} ${backdrop}
                transition-all duration-500 max-w-[90%] sm:max-w-sm w-auto`}
                    >
                        <img
                            src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
                            alt="hi gif"
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/30 flex-shrink-0"
                        />
                        <div className="flex flex-col">
                            <h3 className="font-semibold text-base sm:text-lg leading-tight">Hi there! 👋</h3>
                            <p className="text-xs sm:text-sm opacity-100 leading-snug">
                                Welcome to my portfolio — glad you’re here!
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </>
    )
}

export default Message;