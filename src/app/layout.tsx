import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { KumaRegistry } from '@kuma-ui/next-plugin/registry';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'The tools',
    description: 'The useful tools',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <KumaRegistry>{children}</KumaRegistry>
            </body>
        </html>
    );
}
