import React from "react";

function Child() {
    console.log('Child');
  return <div>Child</div>;
}

function Father(props: React.PropsWithChildren<{}>) {
    const [num, setNum] = React.useState(0);
    return (
        <div onClick={() => setNum(num + 1)}>
            {num}
            // {props.children}
        </div>
    );
}

export { Father, Child }