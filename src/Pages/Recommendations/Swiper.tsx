import React, {  WheelEvent } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'


interface SwiperProps {
    children: Array<JSX.Element>
}

interface SwiperState {
    indexSelected: number
}

class Swiper extends React.Component<SwiperProps, SwiperState> {
    public constructor(props: SwiperProps) {
        super(props);

        this.state = { indexSelected: 0 }
        this.onScroll = this.onScroll.bind(this);
        this.shift = this.shift.bind(this);
    }

    numberArray = ["first", "second", "third", "forth", "fifth", "sixth", "seventh"];
    
    public render(): JSX.Element {
        return (<div className="swiper">
            <div className={"swiper-container " + this.numberArray[this.state.indexSelected]} onWheel={this.onScroll}>
                {this.props.children}
            </div>
            <div className="directions">
                <FontAwesomeIcon icon={faArrowLeft} onClick={() => this.shift(false)}/>
                <FontAwesomeIcon icon={faArrowRight} onClick={() => this.shift(true)}/>
            </div>
        </div>)
    }

    public onScroll(event: WheelEvent<HTMLDivElement>) {
        event.preventDefault();
        if (event.deltaY > 0) {
            this.shift(true);
        } else {
            this.shift(false);
        }
        return false;
    }

    public shift(right: boolean) {
        const currentIndex = this.state.indexSelected;
        if (right) {
            if (currentIndex < 6) {
                this.setState({ indexSelected: currentIndex + 1 })
            }
        } else {
            if (currentIndex > 0) {
                this.setState({ indexSelected: currentIndex - 1 })
            }
        }
    }
}

export default Swiper;