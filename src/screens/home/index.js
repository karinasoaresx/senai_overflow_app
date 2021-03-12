import React, { useState, useEffect } from 'react';
import { StatusBar, FlatList, TouchableOpacity, ActivityIndicator } from "react-native";
import { Container, ToolBar, TextToolBar, IconSignOut, ImageLogo, LoadingFeed } from './styles';
import colors from '../../styles/colors';
import CardQuestion from '../../components/cardQuestion';
import {api} from "../../services/api";
import { signOut } from '../../services/security';
import imgLogo from "../../../assets/logo.png";

function Home({navigation}) {
    StatusBar.setBackgroundColor(colors.darkRed);


    const [isLoadingFeed, setIsLoadingFeed] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [page, setPage] = useState(1);

   
    const loadQuestions = async (reload) => {
        //se ja estiver buscando, não busca dnv
        if (isLoadingFeed) return;

        //se chegar no final, não busca dnv
        if (totalQuestions > 0 && totalQuestions == questions.length) return;

        setIsLoadingFeed(true);
        const response = await api.get("/feed", {
            params: { page },
        });

        setPage(page + 1);

        setQuestions([...questions, ...response.data]);

        setTotalQuestions(response.headers["x-total-count"]);

        setIsLoadingFeed(false);
    };

    useEffect(() => {
        if(questions.length === 0) {
            loadQuestions();
        }
    }, [questions]);

    const handleSignOut = () => {
        signOut();
        navigation.navigate("Login");
    };

    const handleRefresh = () => {
        setPage(1);
        setQuestions([]);
    };
    

    return (
        <Container>
            <ToolBar>
                <TouchableOpacity 
                    onPress={handleRefresh}
                    style={{position: "absolute", left: 4}}>
                    <ImageLogo source={imgLogo}/>
                </TouchableOpacity>
                <TextToolBar> SENAI OVERFLOW </TextToolBar>
                <TouchableOpacity onPress={handleSignOut} style={{position: "absolute", right: 4}}>
                   <IconSignOut name="sign-out"/> 
                </TouchableOpacity>
            </ToolBar>
            <FlatList 
                data={questions}
                style={{width: "100%"}}
                onEndReached={() => loadQuestions()}
                onEndReachedThreshold={1}
                keyExtractor={(question) => String(question.id)}
                renderItem={({item: question}) => (
                    <CardQuestion question={question}/>
                )} 
            />
            {isLoadingFeed && <LoadingFeed size="large" color={colors.darkRed} />}
        </Container>
    );
}

export default Home;