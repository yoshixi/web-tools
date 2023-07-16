import Image from 'next/image';

import { Flex, Box, Grid, Text, Link } from '@kuma-ui/core';

export default function Home() {
    return (
        <main>
            <Grid gridTemplateColumns="repeat(2, 1fr)" gap={6} pt={10}>
                <Link bg="gray" href="/diffViewer">
                    <Text color="black" fontSize="16px" textAlign="center" fontWeight="bolder">
                        Diff Viewer
                    </Text>
                </Link>
                <Box bg="teal" height="80px" as={'button'}>
                    <Text color="black" fontSize="16px">
                        Hello world
                    </Text>
                </Box>
                <Box bg="teal" height="80px" />
                <Box bg="teal" height="80px" />
                <Box bg="teal" height="80px" />
            </Grid>
        </main>
    );
}
