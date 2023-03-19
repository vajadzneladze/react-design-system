import React from "react";
import styled from "styled-components";

export interface TypographyProps {
    content: string,
    variant: string,
    weight:  string,
    children: string
}

const StatusComponent = styled.span`
    display:block;
    padding:5px 10px;
    background:skyblue;
    color:white;
`;

const Typography = ({ content , variant, weight, children }: TypographyProps) => {

    if(variant === 'h1') {
        return <h1 style = {{  fontWeight: weight  }}>  {  children }  </h1>
    }

    if(variant === 'h2') {
        return <h2 style = {{  fontWeight: weight  }}>  {  children }  </h2>
    }

    if(variant === 'h3') {
        return <h3 style = {{  fontWeight: weight  }}>  {  children }  </h3>
    }

    return <h4 style = {{  fontWeight: weight  }}>  {  children }  <StatusComponent> success </StatusComponent>  </h4>
};

export default Typography;