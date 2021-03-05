import React, { useState, useEffect } from "react";
import { Text, View, StatusBar, FlatList } from "react-native";
import { Container, ToolBar, TextToolBar } from "./styles";
import colors from "../../styles/colors";
import CardQuestion from "../../components/CardQuestion";
import { api } from "../../components/services/api";

function Home() {

    const [isLoadingFeed, setIsLoadingFeed] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [page, setPage] = useState(1);

    const loadQuestions = async (reload) => {
        //se já tiver buscando, não busca de novo
        if (isLoadingFeed) return;
    
        //se tiver chego no fim, não busca de novo
        if (totalQuestions > 0 && totalQuestions == questions.length) return;
    
        setIsLoadingFeed(true);
    
        const response = await api.get("/feed", {
          params: { page },
        });
    
        setPage(page + 1);
    
        setQuestions([...questions, ...response.data]);
    
        setTotalQuestions(response.headers["x-total-count"]);
    
        console.log(totalQuestions);
    
        setIsLoadingFeed(false);
      };

      useEffect(() => {
          loadQuestions();
      }, [])

    StatusBar.setBackgroundColor(colors.primary)

    return(
        <Container>
            <ToolBar>
                <TextToolBar>Senai Overflow</TextToolBar>
            </ToolBar>
            <FlatList 
              data={questions}
              style={{width: "100%"}}
              onEndReached={() => loadQuestions()}
              onEndReachedThreshold={0.2}
              keyExtractor={(question) => String(question.id)}
              renderItem={({item: question}) => (
                  <CardQuestion question={question} />
              )}
            />
            
        </Container>
    );
}

export default Home;