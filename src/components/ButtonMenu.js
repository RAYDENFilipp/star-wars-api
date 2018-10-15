import React from "react";
import Button from "./Button";


const ButtonMenu = ({ names, onClick }) => {
    return (
        <nav>
            {
                names.map( (item, i) => {
                    return (
                        <Button key={i} name={item} onClick={onClick}/>
                    );
                })
            }
        </nav>
    );
};

export default ButtonMenu;