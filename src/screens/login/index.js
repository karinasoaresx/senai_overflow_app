import React, { useState } from "react";
import { StatusBar, Alert} from "react-native";
import Button from "../../components/button";
import colors from "../../styles/colors";
import { Container, TextToolBar, ToolBar } from "../../styles/stylesGlobal";
import { Content, TextInputLogin, Label } from "./styles";
import { api } from "../../services/api";
import { signIn } from "../../services/security";
import { FlatList } from "react-native-gesture-handler";

function Login({navigation}) {

    StatusBar.setBackgroundColor(colors.darkRed);

    const [login, setLogin] = useState({
        email: "",
        password: "",
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleEmail = (e) => {
        setLogin({ ...login, email: e});
    }

    const handlePassword = (e) => {
        setLogin({ ...login, password: e});
    }

    const handleSubmit = async () => {
        try {

            setIsLoading(true);

            const response = await api.post("/sessions", login);

            signIn(response.data);

            setIsLoading(false);

            navigation.navigate("Home");
        } catch (error) {
            setIsLoading(false);
            console.log(error);

            if(error.response) {
                Alert.alert("opa pera lá amigão", error.response.data.error);
            }
        }
    };

    return (
        <Container>
            <ToolBar>
                <TextToolBar> faça o login </TextToolBar>
            </ToolBar>
            <Content>
                <Label> e-mail </Label>
                <TextInputLogin
                    autoCompleteType="email" 
                    placeholder="digite seu email"
                    placeholderTextColor={colors.lightTransparent}
                    onChangeText={handleEmail}/>
                <Label> senha </Label>
                <TextInputLogin 
                    autoCompleteType="password" 
                    placeholder="digite sua senha"
                    placeholderTextColor={colors.lightTransparent}
                    //serve pra deixar a senha com *
                    //indica que é um campo de senha
                    secureTextEntry={true}
                    onChangeText={handlePassword}/>
                    <Button handlePress={handleSubmit} 
                    text={isLoading ? "Verificando..." : "entrar"}
                    //só habilita o botão de entrar se os campos email ou password não estiverem vazios
                    disabled={isLoading || login.email === "" || login.password === "" }/>
                    
            </Content>
        </Container>
    )
}

export default Login;