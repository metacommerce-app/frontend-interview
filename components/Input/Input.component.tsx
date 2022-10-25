import { Input as AntInput, InputNumber, InputNumberProps as AntInputNumberProps, InputProps as AntInputProps } from "antd";
import React from "react";
import { InputProps } from "./Input.types";

const { Search } = AntInput

const Input: React.FunctionComponent<InputProps>
    & {
        Search: React.FC<AntInputProps>;
        InputNumber: React.FC<AntInputNumberProps>;
    }
    = (props) => {
        return <AntInput {...props} />;
    };

Input.Search = Search

Input.InputNumber = InputNumber

export default Input;
