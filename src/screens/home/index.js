import React, { useState, useEffect } from 'react';
import { StatusBar, FlatList } from "react-native";
import { Container, ToolBar, TextToolBar } from './styles';
import colors from '../../styles/colors';
import CardQuestion from '../../components/cardQuestion';
import {api} from "../../services/api";

function Home() {
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
        loadQuestions();
    }, []);

    

    return (
        <Container>
            <ToolBar>
                <TextToolBar> SENAI OVERFLOW </TextToolBar>
            </ToolBar>
            <FlatList 
                data={questions}
                style={{width: "100%"}}
                onEndReached={() => loadQuestions()}
                onEndReachedThreshold={0.2}
                keyExtractor={(question) => String(question.id)}
                renderItem={({item: question}) => (
                    <CardQuestion question={question}/>
                )} 
            />
        </Container>
    );
}

export default Home;