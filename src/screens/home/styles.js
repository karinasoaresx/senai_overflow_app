import styled from "styled-components/native";
import colors from "../../styles/colors";
import { StatusBar } from "react-native";
import { TextDefault } from "../../styles/stylesGlobal"
import Icon from "react-native-vector-icons/FontAwesome";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: ${colors.dark};
    padding-top: ${StatusBar.currentHeight}px;
`;

export const ToolBar = styled.View`
    width: 100%;
    height: 50px;
    flex-direction: row;
    align-content: space-between;
    justify-content: center;
    align-items: center;
    background-color: ${colors.darkRed};
    border-bottom-width: 1px;
    border-bottom-color: ${colors.light};
    z-index: 9;
`;

export const TextToolBar = styled(TextDefault)`
    flex: 1;
    font-size: 20px;
    color: ${colors.light};
    font-weight: bold;
    text-align: center;
`;

export const IconSignOut = styled(Icon)`
    font-size: 25px;
    color: ${colors.light};
`;

export const ImageLogo = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    border-color: ${colors.light};
    margin-top: 20px;
    z-index: 9;
`;

export const LoadingFeed = styled.ActivityIndicator`
    position: absolute;
    bottom: 4px;
`;