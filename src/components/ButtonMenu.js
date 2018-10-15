import React from "react";
import Button from "./Button";

const ButtonMenu = ({ names, onClick }) => {
    const list = names.map((item, i) => {
        return <Button key={i} name={item} onClick={() => onClick(i)} />;
    });
    return <nav>{list}</nav>;
};

export default ButtonMenu;
