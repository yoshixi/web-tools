import Image from 'next/image';

import { Flex, Box, Grid, Text, Link, css } from '@kuma-ui/core';

const tileStyle = css`
    background: #fefefe;
    border-radius: 10px;
    box-shadow: 0px 1px 7px -3px rgba(0, 0, 0, 0.35);
    border: none;
    &:hover {
        box-shadow: 0 0 0.4em #0005;
    }
`;

export default function Home() {
    return (
        <main>
            <Grid gridTemplateColumns="repeat(2, 1fr)" gap={6} pt={10} px={10}>
                <Link href="/diffViewer" className={tileStyle}>
                    <Text color="black" fontSize="16px" textAlign="center" fontWeight="bolder">
                        Diff Viewer
                    </Text>
                </Link>
                <Box height="80px" as={'button'} className={tileStyle}>
                    <Text color="black" fontSize="16px">
                        Coming soon...
                    </Text>
                </Box>
                <Box height="80px" className={tileStyle} />
                <Box height="80px" className={tileStyle} />
                <Box height="80px" className={tileStyle} />
            </Grid>
        </main>
    );
}
