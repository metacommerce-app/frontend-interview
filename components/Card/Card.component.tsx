import React from "react";
import { Card as AntCard } from "antd"
import { CardProps } from "./Card.types";


const Card: React.FunctionComponent<CardProps> = ({ children }) => {
    return (
        <AntCard bodyStyle={{ padding: "12px", width: "100%", backgroundColor: "white" }}>
            {children}
        </AntCard>
    );
};

export default Card;
