import React from "react";
import { Container, Text } from "./style";

function Button({text, handlePress, ...rest }) {
    return(
        <Container onPress={handlePress} {...rest}>
            <Text>{text}</Text>
        </Container>

    )
}

export default Button;