import React from 'react';

const Button = ({ children }) => {
    // const Button = (props) => {
    // console.log(props);
    // const { children } = props;
    return (
        <div className="text-center">
            {/* <button className="btn btn-active btn-accent">Button</button> */}
            <button className="btn btn-active btn-accent">{children}</button>
        </div>
    );
};

export default Button;