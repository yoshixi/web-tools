import { TbArrowsDiff } from 'react-icons/tb';
import { Box, Grid, Text, Link, css } from '@kuma-ui/core';

const tileStyle = css`
    background: #fefefe;
    border-radius: 10px;
    box-shadow: 0px 1px 7px -3px rgba(0, 0, 0, 0.35);
    border: none;
    &:hover {
        box-shadow: 0 0 0.4em #0005;
    }
    display: block;
    height: 100px;
`;

export default function Home() {
    return (
        <main>
            <Grid gridTemplateColumns="repeat(2, 1fr)" gap={6} pt={10} px={10}>
                <Link href="/diffViewer" className={tileStyle}>
                    <p
                        className={css`
                            text-align: center;
                            font-size: 24px;
                            padding-top: 10px;
                            margin-bottom: 4px;
                        `}
                    >
                        <TbArrowsDiff />
                    </p>
                    <Text color="black" fontSize="16px" textAlign="center" fontWeight="bolder">
                        Diff Viewer
                    </Text>
                </Link>
                <Box as={'button'} className={tileStyle}>
                    <Text color="black" fontSize="16px">
                        Coming soon...
                    </Text>
                </Box>
                <Box className={tileStyle} />
                <Box className={tileStyle} />
                <Box className={tileStyle} />
            </Grid>
        </main>
    );
}
