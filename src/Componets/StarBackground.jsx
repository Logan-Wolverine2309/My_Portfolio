import { useEffect, useState } from "react";


// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, duration

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteros] = useState([]);

    useEffect(() => {
        genarateStarts();
        genarateMeteors();

        const handleResize = () => {
            genarateStarts();

        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    const genarateStarts = () => {
        const numberofStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        );
        const newStars = []
        for (let i = 0; i < numberofStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1, // Random size between 1 and 3
                x: Math.random() * 100, // Random x position in percentage
                y: Math.random() * 100, // Random y position in percentage
                opacity: Math.random() * 0.5 + 0.5, // Random opacity between 0 and 1
                animationDuration: Math.random() * 4 + 2,// Random duration between 5 and 10 seconds
            });

        }

        setStars(newStars);
    };



    const genarateMeteors = () => {
        const numberofMeteors = 4;
        const newMeteors = []
        for (let i = 0; i < numberofMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            });

        }

        setMeteros(newMeteors);
    };

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {stars.map((star) => (
                <div key={star.id} className="star animate-subtle"
                    style={{
                        width: star.size + 'px',
                        height: star.size + 'px',
                        left: star.x + '%',
                        top: star.y + '%',
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + 's',
                    }} />
            ))}

            {meteors.map((meteor) => (
                <div key={meteor.id} className="meteor animate-meteor"
                    style={{
                        width: meteor.size * 50 + 'px',
                        height: meteor.size * 3 + 'px',
                        left: meteor.x + '%',
                        top: meteor.y + '%',
                        animationDelay: meteor.delay,
                        animationDuration: meteor.animationDuration + 's',
                    }} />
            ))}

        </div>
    );
};



