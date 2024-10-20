import React, { useEffect } from 'react';
import '../styles/woman-day.scss';

const WomanDay = () => {
    const arr = ["💕", "🌹", "🌸", "🌷", "💗"];
    useEffect(() => {
        function rain() {
            let cloud = document.querySelector('.cloud');
            let e = document.createElement('div');

            e.classList.add('drop');
            cloud.appendChild(e);

            let left = Math.floor(Math.random() * 290);
            let size = Math.round() * 1.5;
            let duration = Math.random() * 1;

            e.innerText = arr[Math.floor(Math.random() * arr.length)];
            e.style.left = left + 'px';
            e.style.fontSize = 0.5 + size + 'em';
            e.style.animationDuration = 1 + duration + 's';

            setTimeout(function () {
                cloud.removeChild(e);
            }, 2000);
        }

        const interval = setInterval(rain, 30);

        // Cleanup interval when component unmounts
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container">
            <div className="cloud">
                <h2>Happy women's day 20/10</h2>
            </div>
        </div>
    );
};

export default WomanDay;