import React from 'react';
import { StatusBar } from "react-native";
import { Container, ToolBar, TextToolBar } from './styles';
import colors from '../../styles/colors';
import CardQuestion from '../../components/cardQuestion';

function Home() {

    StatusBar.setBackgroundColor(colors.primary);

    return (
        <Container>
            <ToolBar>
                <TextToolBar> SENAI OVERFLOW </TextToolBar>
            </ToolBar>
            <CardQuestion/>
        </Container>
    );
}

export default Home;