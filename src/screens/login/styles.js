import styled from "styled-components/native";
import colors from "../../styles/colors";
import { TextDefault } from "../../styles/stylesGlobal";

export const Content = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const Label = styled(TextDefault)`
    width: 96%;
    align-self: flex-start;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 5px;
    margin-left: 10px;
`;

export const TextInputLogin = styled.TextInput`
    width: 96%;
    height: 45px;
    color: ${colors.light};
    font-size: 20px;
    margin-bottom: 15px;
    padding: 5px;
    background-color: ${colors.darkGray};
    border-radius: 4px;
`;