import { useRef, useState, type MouseEvent } from "react";

export default function AudioName() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const startingRef = useRef(false);
    const [pronounceName, setPronounceName] = useState("Make sure your audio is turned on!");

    const playName = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (startingRef.current) return false;

        // Replace the audio instructions hint with the name pronounciation.
        setPronounceName('Alexander KOYK SESS-tone');

        try {
            // Create audio object only on first click
            if (!audioRef.current) {
                const audioUrl = import.meta.env.BASE_URL + 'sounds/name.mp3';    
                audioRef.current = new Audio(audioUrl);
            }
            const audio = audioRef.current;

            // ignore multiple clicks
            if (!audio.ended && !audio.paused) return;
                
            await audio.play();
        } catch(error) {
            console.error("Audio playback error. ", error);
            
            alert("Unfortunately, the audio couldn't play. Please try again later!");
        } finally {
            startingRef.current = false;
        }
    }

    return (
        <>
            <button className="button" onClick={playName} style={{ fontSize: '1.5rem', fontFamily: 'VT323', cursor: 'pointer'}}>Pronounce my name</button> ({pronounceName})
        </>
    );
}