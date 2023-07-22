import { DiffPage } from '@/components/diffViewer/DiffViewer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'The Diff',
    description: 'The diff tool',
};

export default function Page() {
    return (
        <main>
            <h1>The Diff</h1>
            <p>The tool for seeing diffs between two texts.</p>
            <DiffPage></DiffPage>
        </main>
    );
}
