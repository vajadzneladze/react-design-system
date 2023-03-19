import React from "react";

export interface TypographyProps {
    content: string,
    variant: string,
    weight:  string,
}

const Typography = ({ content , variant, weight }: TypographyProps) => {

    if(variant === 'h1') {
        return <h1 style = {{  fontWeight: weight  }}>  {  content }  </h1>
    }

    if(variant === 'h2') {
        return <h2 style = {{  fontWeight: weight  }}>  {  content }  </h2>
    }

    if(variant === 'h3') {
        return <h3 style = {{  fontWeight: weight  }}>  {  content }  </h3>
    }

    return <h4 style = {{  fontWeight: weight  }}>  {  content }  </h4>
};

export default Typography;