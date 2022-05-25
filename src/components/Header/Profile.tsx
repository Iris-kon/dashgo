import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Chiaki Oliveira</Text>
                <Text color="gray.300" fontSize="small">
                    kouhi.my@gmail
                </Text>
            </Box>

            <Avatar size="md" name="Chiaki Oliveira" src="" />
        </Flex>
    )
}