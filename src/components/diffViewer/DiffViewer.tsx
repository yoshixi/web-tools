'use client';

import { PropsWithChildren } from 'react';
import ReactDiffViewer from 'react-diff-viewer';
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { Box, Grid, Input } from '@kuma-ui/core';

type Props = {
    oldValue: string;
    newValue: string;
};

export const DiffViewer = ({ oldValue, newValue }: Props) => {
    return <ReactDiffViewer oldValue={oldValue} newValue={newValue} splitView={true} />;
};

interface TextInputProps {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({ onChange }: TextInputProps) => {
    return <Input type="text" minHeight={200} onChange={onChange}></Input>;
};

export const DiffPage = () => {
    const [newText, setNewText] = useState('');
    const [oldText, setOldText] = useState('');

    const handleNewTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewText(event.target.value);
    };
    const handleOldTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setOldText(event.target.value);
    };
    return (
        <>
            <Box>
                <Grid gridTemplateColumns="repeat(2, 1fr)" gap={7}>
                    <TextInput onChange={handleOldTextChange}></TextInput>
                    <TextInput onChange={handleNewTextChange}></TextInput>
                </Grid>
            </Box>
            <Box>
                <DiffViewer oldValue={oldText} newValue={newText}></DiffViewer>
            </Box>
        </>
    );
};
