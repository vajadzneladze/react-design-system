import React from "react";

export interface TypographyProps {
    content: string,
    variant: string,
    weight:  string,
    children: string
}


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

    if(variant === 'h6') {
        return <h6 style = {{  fontWeight: weight  }}>  {  children }  </h6>
    }

    return <h4 style = {{  fontWeight: weight  }}>  {  children }   success  </h4>
};

export default Typography;