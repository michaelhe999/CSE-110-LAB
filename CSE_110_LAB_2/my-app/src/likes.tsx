import React, { useState } from 'react';

interface ClickLikeButtonProps {
    itemName: string;
    likedNotes: string[];
    setLikedNotes: React.Dispatch<React.SetStateAction<string[]>>;
}

export function ClickLikeButton({ itemName, likedNotes, setLikedNotes }: ClickLikeButtonProps) {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
        if (count % 2 === 0) {
            // Add to likedNotes if it's not already in the list
            if (!likedNotes.includes(itemName)) {
                setLikedNotes([...likedNotes, itemName]);
            }
        } else {
            // Remove from likedNotes if it's already in the list
            setLikedNotes(likedNotes.filter(note => note !== itemName));
        }
    };

    const buttonShape = count % 2 === 0 ? '♡' : '❤️';

    return (
        <div>
            <button onClick={handleClick}>{buttonShape}</button>
        </div>
    );
}

interface LikedNotesProps {
    likedNotes: string[];
}

export function LikedNotes({ likedNotes }: LikedNotesProps) {
    return (
        <ol>
            {likedNotes.map((note, index) => (
                <li key={index}>{note}</li>
            ))}
        </ol>
    );
}