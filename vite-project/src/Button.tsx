import { ReactNode } from "react";

type ButtonProps = {
    style : {
        backgroundColor: string;
        fontSize: number;
        textColor: string;
    };
    children: ReactNode
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button(props: ButtonProps
) {
    return (
        <button style={props.style} onClick={props.onClick}>{props.children}</button>
    )
}
