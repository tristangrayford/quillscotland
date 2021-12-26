import React from "react";
import { Book } from "../../dtos/enums";

interface BookItemProps {
    bookItemTitle: string;
    bookItemContent: JSX.Element;
    bookItemImage: string;
    onClick: Function;
    book: Book;
}

class BookItem extends React.Component<BookItemProps> {
    public constructor(props: BookItemProps) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    public render(): JSX.Element {
        return (<div className="book-item" onClick={this.onClick}>
            <img src={this.props.bookItemImage}/>
            <h3>{this.props.bookItemTitle}</h3>
            {this.props.bookItemContent}
        </div>)
    }

    public onClick(): void {
        this.props.onClick(this.props.book);
    }
}

export default BookItem;