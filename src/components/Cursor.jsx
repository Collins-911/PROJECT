import '../css/cursor.css'
import { useEffect } from 'react';  

export default function Cursor(){
     useEffect(() => {
        const cursor = document.querySelector('.custom-cursor');
    
        const moveCursor = (e) => {
          if (cursor) {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
          }
        };
    
        window.addEventListener('mousemove', moveCursor);
    
        return () => {
          window.removeEventListener('mousemove', moveCursor);
        };
      }, []);
}