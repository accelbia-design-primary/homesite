import { useEffect, useState } from "react";

const Background = (data) => {
    const [cursorX, setCursorX] = useState(0);
    const [cursorY, setCursorY] = useState(0);

    useEffect(() => {
        const updateCursorPosition = (e) => {
            setCursorX(e.clientX);
            setCursorY(e.clientY);
        }
        window.addEventListener('mousemove', updateCursorPosition);
        return () => window.removeEventListener('mousemove', updateCursorPosition);
    }, [cursorX, cursorY]);


    return (
        <div className="body" style={{
            background: 'radial-gradient(circle at ' + cursorX + 'px ' + cursorY + 'px,' + data.color + ' 0%, #000 100%)',
          }}>
            </div>
    );
}

export default Background;