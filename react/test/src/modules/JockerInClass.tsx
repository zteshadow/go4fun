
import React, { PureComponent } from "react";

interface JokerProps {
    count: number;
}

interface JokerState {
    count: number;
}
class Joker extends PureComponent<JokerProps, JokerState> {
    constructor(props: JokerProps) {
        super(props);
        this.state = {
            count: props.count,
        }
    }
    componentWillReceiveProps(nextProps: JokerProps, nextContext: any) {
        console.log(`I am joker's componentWillReceiveProps`);
        this.setState({
            count: nextProps.count,
        });
    }

    render() {
        console.log(`I am joker's render`);
        const { count } = this.state;
        return (
            <div>
                <p style={{ color: 'red' }}>
                    Joker: you clicked { count } times
                </p>
            </div>);
    }
}

interface DCProps {}

interface DCState {
    count: number;
}

class DC extends PureComponent<DCProps, DCState> {
    constructor(props: DCProps) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <p> you clicked {count} times</p>
                <button onClick={() => this.setState({ count: count + 1 })}>
                    Click me
                </button>
                <Joker count={count} />
            </div>);
    }
}

export default DC;