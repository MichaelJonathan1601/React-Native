import React, { useState } from "react";
import { TextInput, StatusBar, TouchableOpacity, Alert } from "react-native";
import { color } from "react-native-reanimated";
import Button from "../../components/Button";
import { api } from "../../components/services/api";
import { signIn } from "../../components/services/security";
import colors from "../../styles/colors";
import { Container, ToolBar, TextToolBar } from "../../styles/stylesGlobal";
import { TextInputLogin } from "./styles";

function Login({ navigation }) {
    StatusBar.setBackgroundColor(colors.primary);

    const [login, setLogin] = useState({
        email: "",
        password: ","
    });

    const handleEmail = (e) => {
       setLogin({...login, email: e}); 
    };

    
    const handlePassword = (e) => {
        setLogin({...login, password: e}); 
     };

     const handleSubmit = async () => {
         try {
            const response = await api.post("/sessions", login);
            
            signIn(response.data);

            navigation.navigate("Home")


         } catch (error) {
             console.log(error);
             if(error.response){
                 Alert.alert("Ops", error.response.data.error);
             }
         }
     }


    return (
        <Container>
            <ToolBar>
                <TextToolBar>Faça Login</TextToolBar>
            </ToolBar>
            <Content>
                <Label>E-mail</Label>
                <TextInputLogin 
                autoCompleteType="email" 
                placeholder="Digite seu Email" 
                placeholderTextColor={colors.lightTransparent}
                onChangeText={handleEmail}/>
               
               <Label>Senha</Label>
                <TextInputLogin 
                autoCompleteType="password" 
                placeholder="Digite sua senha"
                placeholderTextColor={colors.lightTransparent}
                secureTextEntry={true}
                onChangeText={handlePassword}/>
            
                <Button 
                handlePress={handleSubmit}
                text="Entrar"
                disabled={login.email === "" || login.password === ""}
                style={{ width: "96%" }} />
            
            </Content>
        </Container>
    )
}