import React from "react";
import { Container, ImageProfile, CardHeader, HeaderContent, TextPoster, TextDate, CardBody, TextTitle, TextDescription, ImageQuestion, CardFooter, ContainerInputAnswer, InputAnswer, SendIcon, ContainerAnswer } from "./styles";
import fotoPerfil from "../../../assets/foto_perfil.png";
import colors from "../../styles/colors";

function CardAnswer () {
    return (
        <ContainerAnswer>
            <CardHeader>
                <ImageProfile source={fotoPerfil}/>
                <HeaderContent>
                    <TextPoster>Por Fulano</TextPoster>
                    <TextDate>em 10/10/2010 às 10:10</TextDate>
                </HeaderContent>
            </CardHeader>
            <CardBody>
                <TextDescription>Essa é a descrição da resposta</TextDescription>
            </CardBody>
        </ContainerAnswer>
    )
}
 
function CardQuestion () {
    return(
        <Container>
            <CardHeader>
                <ImageProfile source={fotoPerfil}/>
                <HeaderContent>
                    <TextPoster>Por Fulano</TextPoster>
                    <TextDate>em 10/10/2010 às 10:10</TextDate>
                </HeaderContent>
            </CardHeader>
            <CardBody>
                <TextTitle>Título da questão</TextTitle>
                <TextDescription>Descrição da questão fica aqui</TextDescription>
                <ImageQuestion style={{resizeMode: "contain"}} source={fotoPerfil} />
            </CardBody>
            <CardFooter>
                <TextPoster>Seja o primeiro a responder</TextPoster>
                <CardAnswer />
                <ContainerInputAnswer>
                    <InputAnswer placeholder="Responda a essa pergunta" placeholderTextColor={colors.lightTransparent}/>
                    <SendIcon name="paper-plane" />
                </ContainerInputAnswer>
           </CardFooter>
        </Container>
    );
}

export default CardQuestion;