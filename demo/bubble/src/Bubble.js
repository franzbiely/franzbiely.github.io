import React from 'react';
import './styles/animate.scss';
import './styles/bubble.scss'

export default class Bubble extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            lifetime: 0,
            obj: '',
            size: 10,
            top: 0,
            left: 0
        };
        this.rand = this.rand.bind(this);
        this.flyup = this.flyup.bind(this);
    }

    rand(min, max) {
        return Math.random() * (max - min) + min;
    }
    componentDidMount() {
        let bubble_id = 0;
        let speedBorn = 100;

        setInterval(
            (function (scope) {
                return function () {
                    speedBorn = scope.rand(10, 100);
                    console.log(speedBorn);
                }
            })(this), 5000);

        setInterval(
            (function (scope) {
                return function () {
                    scope.setState({
                        size: scope.rand(20, 50),
                        lifetime: 10000,
                        speed: scope.rand(50, 300),
                        id: bubble_id,
                        top: scope.rand(10, 650),
                        left: scope.rand(10, 1350)
                    });
                    scope.born()
                    bubble_id++;
                }
            })(this),
            speedBorn);
    }
    born() {
        const DOMBubble = document.createElement('span');
        DOMBubble.className = "fade-in bubble bubble_id-" + this.state.id + " bubble_lifetime-" + this.state.lifetime + " ";

        DOMBubble.style.width = this.state.size + "px";
        DOMBubble.style.height = this.state.size + "px";
        DOMBubble.style.top = this.state.top + "px";
        DOMBubble.style.left = this.state.left + "px";
        DOMBubble.setAttribute('onmouseover', 'killBubble(this)');
        document.body.appendChild(DOMBubble);

        const flyInterval = this.flyup(DOMBubble);
        this.deadline(DOMBubble, flyInterval);
    }
    deadline(DOMBubble, flyInterval) {
        // indicator half life
        setTimeout(function () {
            DOMBubble.className += ' old';
            DOMBubble.className = DOMBubble.className.replace('fade-in', '');
        }, this.state.lifetime / 1.3);

        // for deadline
        setTimeout(function () {
            if (DOMBubble.parentNode) {
                DOMBubble.parentNode.removeChild(DOMBubble)
            }
            clearInterval(flyInterval);
        }, this.state.lifetime);
    }
    flyup(DOMBubble) {
        return setInterval(function () {
            DOMBubble.style.top = parseInt(DOMBubble.style.top) - 10 + "px";
        }, this.state.speed);
    }

    render() {

        return (

            <div className="App">
                <h1>I love to<br />React!</h1>
                <p>Coded by : Francis Albores</p>
            </div>
        )
    }
}

