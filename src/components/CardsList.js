import React from "react";
import Card from "./Card";

const CardsList = ({ list }) => {
    const arr = list.map((item, i) => {
        return <Card key={i} name={item} />;
    });
    return <div>{arr}</div>;
};

export default CardsList;
