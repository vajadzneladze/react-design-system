import React from "react";

export interface DummyProps {
    label: string;
}

const Dummy = (props: DummyProps) => {
    return <p { ...props}>  check this dude ...    </p>;
};

export default Dummy;