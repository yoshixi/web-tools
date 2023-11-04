import { MarathonPaceCalculator } from '@/components/marathonPaceCalculator/MarathonPaceCalculator';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Marathon Pace Calculator',
    description: 'Marathon Pace Calculator',
};

export default function Page() {
    return (
        <main>
            <h1>Marathon Pace Calculator</h1>
            <p></p>
            <MarathonPaceCalculator></MarathonPaceCalculator>
        </main>
    );
}
