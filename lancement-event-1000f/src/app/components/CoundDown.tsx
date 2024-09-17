"use client";

import React, { useEffect, useState } from 'react';

interface CountdownTimerProps {
    deadline: Date;
    title: string;
}

interface CountdownTimeLeft {
    days?: number;
    hrs?: number;
    mins?: number;
    secs?: number;
}

const INITIAL_TIME_LEFT = { days: 0, hrs: 0, mins: 0, secs: 0 };

function CountdownTimer({ deadline, title }: CountdownTimerProps) {
    const [timeLeft, setTimeLeft] = useState<CountdownTimeLeft>(INITIAL_TIME_LEFT);

    useEffect(() => {
        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    function calculateTimeLeft(): CountdownTimeLeft {
        let timeLeft: CountdownTimeLeft = {};
        const currentDate = new Date();
        const difference = deadline.getTime() - currentDate.getTime();

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
                mins: Math.floor((difference / 1000 / 60) % 60),
                secs: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    }

    function getLabel(unit: string): string {
        switch (unit) {
            case 'days':
                return 'Jours';
            case 'hrs':
                return 'Heures';
            case 'mins':
                return 'Minutes';
            case 'secs':
                return 'Secondes';
            default:
                return '';
        }
    }

    return (
        <div className="bg-yellow-100 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-yellow-700 mb-4">{title}</h2>
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
                {Object.entries(timeLeft).map(([unit, value], index, array) => (
                    <div key={unit} className="flex flex-col items-center bg-yellow-200 p-2 md:p-4 rounded-lg shadow-inner min-w-[60px] md:min-w-[100px]">
                        <div className="flex">
                            <div className="bg-yellow-300 flex rounded-lg shadow-inner mx-1">
                                <p className="text-2xl md:text-4xl font-bold text-yellow-800">{Math.floor(value / 10)}</p>
                                <p className="text-2xl md:text-4xl font-bold text-yellow-800">{value % 10}</p>
                            </div>
                            {index !== array.length - 1 && <span className="text-xl md:text-3xl font-bold text-yellow-700 mx-1 md:mx-2">:</span>}
                        </div>
                        <p className="text-xs md:text-sm text-yellow-600 capitalize">{getLabel(unit)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CountdownTimer;