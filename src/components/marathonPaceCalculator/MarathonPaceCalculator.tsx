'use client';

import React, { useState } from 'react';
import { Box, Button, Input, css } from '@kuma-ui/core';

export const MarathonPaceCalculator: React.FC = () => {
    const [targetTime, setTargetTime] = useState('');
    const [pace, setPace] = useState<string | null>(null);

    const calculatePace = (time: string) => {
        const [hours, minutes, seconds] = time.split(':').map(Number);
        const totalSeconds = hours * 3600 + minutes * 60 + seconds;
        const pacePerKm = totalSeconds / 42.195;
        const paceMinutes = Math.floor(pacePerKm / 60);
        const paceSeconds = Math.floor(pacePerKm % 60);
        return `${paceMinutes.toString().padStart(2, '0')}:${paceSeconds.toString().padStart(2, '0')}`;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setPace(calculatePace(targetTime));
    };

    return (
        <div>
            <h1>マラソンペース計算器</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="targetTime">目標タイム (hh:mm:ss):</label>
                <Input
                    type="text"
                    id="targetTime"
                    value={targetTime}
                    onChange={(e) => setTargetTime(e.target.value)}
                    placeholder="例: 3:00:00"
                    pattern="\d{1,2}:\d{2}:\d{2}"
                    required
                    className={css`
                        resize: vertical;
                        outline: none;
                        padding: 8px;
                        background: none;
                        min-height: 50px;
                        font-family: monospace;
                        white-space: pre;
                        border-radius: 4px;
                        color: #000;
                    `}
                />
                <Box
                    className={css`
                        padding: 8px;
                    `}
                >
                    <Button
                        type="submit"
                        className={css`
                            height: 40px;
                            width: 100px;
                        `}
                    >
                        計算
                    </Button>
                </Box>
            </form>
            {pace && <p>1kmごとのペース: {pace}</p>}
        </div>
    );
};
