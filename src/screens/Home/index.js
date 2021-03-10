import React, { useState, useEffect } from "react";
import { Text, View, StatusBar, FlatList, TouchableOpacity } from "react-native";
import { Container, ToolBar, TextToolBar, IconSignOut } from "./styles";
import colors from "../../styles/colors";
import CardQuestion from "../../components/CardQuestion";
import { api } from "../../components/services/api";
import { signOut } from "../../components/services/security";

function Home({navigation}) {
    StatusBar.setBackgroundColor(colors.primary);

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

      const handleSignOut = () => {
          signOut();
          navigation.navigate("Login")
      }

    return(
        <Container>
            <ToolBar>
                <TextToolBar>Senai Overflow</TextToolBar>
            </ToolBar>
            <TouchableOpacity
            onPress={handleSignOut}  
            style={{position: "absolute", right: 4}}>
            <IconSignOut name="sign-out"/>
            </TouchableOpacity>
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