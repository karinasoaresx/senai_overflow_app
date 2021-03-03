import React from "react";
import 
{ Container, 
  CardHeader, 
  ImageProfile, 
  HeaderContent, 
  TextPoster, 
  TextDate, 
  CardBody, 
  TextTitle, 
  TextDescription, 
  ImageQuestion, 
  CardFooter,
  ContainerInputAnswer,
  InputAnswer, 
  SendIcon,
  ContainerAnswer} from "./styles";
import fotoPerfil from "../../../assets/foto_perfil.png";
import colors from "../../styles/colors";

function CardAnswer() {
    return(
        <ContainerAnswer>
            <CardHeader>
                <ImageProfile source={fotoPerfil} />
                <HeaderContent>
                    <TextPoster> por karina </TextPoster>
                    <TextDate> em 03/03/2021 às 21:21 </TextDate>
                </HeaderContent>
            </CardHeader>
            <CardBody>
                <TextDescription> resposta </TextDescription>
            </CardBody>
        </ContainerAnswer>
    );
}


function CardQuestion() {
    return (
        <Container>
            <CardHeader>
                <ImageProfile source={fotoPerfil} />
                <HeaderContent>
                    <TextPoster> por karina </TextPoster>
                    <TextDate> em 03/03/2021 às 21:21 </TextDate>
                </HeaderContent>
            </CardHeader>
             <CardBody>
                <TextTitle> titulo da questão </TextTitle>
                <TextDescription> descrição da questão </TextDescription>
                <ImageQuestion style={{resizeMode: "contain"}} source={fotoPerfil} />
            </CardBody>
            <CardFooter>
                <TextPoster> seja o primeiro a responder </TextPoster>
                <CardAnswer/>
                <ContainerInputAnswer>
                    <InputAnswer placeholder="responda essa pergunta" 
                                 placeholderTextColor={colors.lightTransparent}/>
                    <SendIcon name="paper-plane"/>             
                </ContainerInputAnswer>
            </CardFooter>
        </Container>
    );
}

export default CardQuestion;