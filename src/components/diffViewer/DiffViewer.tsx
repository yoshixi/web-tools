'use client';

import ReactDiffViewer from 'react-diff-viewer';
import type { ChangeEventHandler } from 'react';
import { useState } from 'react';
import { Box, Grid, Input, css } from '@kuma-ui/core';

type Props = {
    oldValue: string;
    newValue: string;
};

export const DiffViewer = ({ oldValue, newValue }: Props) => {
    return <ReactDiffViewer oldValue={oldValue} newValue={newValue} splitView={true} />;
};

interface TextInputProps {
    onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

const TextInput = ({ onChange }: TextInputProps) => {
    return (
        <Input
            as="textarea"
            minHeight={200}
            onChange={onChange}
            className={css`
                resize: vertical;
                outline: none;
                padding: 8px;
                background: none;
                min-height: 250px;
                font-family: monospace;
                white-space: pre;
                border-radius: 4px;
                color: #000;
            `}
        ></Input>
    );
};

export const DiffPage = () => {
    const [newText, setNewText] = useState('');
    const [oldText, setOldText] = useState('');

    const handleNewTextChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (event) => {
        setNewText(event.target.value);
    };
    const handleOldTextChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (event) => {
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
