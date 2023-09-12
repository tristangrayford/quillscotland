import React from "react";
import { Book } from "../../dtos/enums";
import BuyLinksUK from "../../dtos/BuyLinksUK";
const uk = require("../../images/logos/UK Flag.png")
const usa = require("../../images/logos/USA Flag.png")
const amazon = require("../../images/logos/Amazon logo.png")
const bandn = require("../../images/logos/BandN.png")
const kobo = require("../../images/logos/Kobo-logo.png")
const apple = require("../../images/logos/Apple Books Logo.png")
const ebooks = require("../../images/logos/eBooks.png")
const waterstones = require("../../images/logos/Waterstones.png")

interface BuyPopupProps {
    onClose: Function;
}

enum Region {
    None,
    UK,
    USA
}

enum Retailer {
    Amazon,
    BarnesAndNoble,
    Kobo,
    AppleBooks,
    eBooks,
    Waterstones
}

interface BuyPopupState {
    selectedRegion: boolean;
    regionSelected: Region;
    bookSelected: Book;
}

class BuyPopup extends React.Component<BuyPopupProps, BuyPopupState> {
    public constructor(props: BuyPopupProps) {
        super(props);
        this.onClose = this.onClose.bind(this);

        this.state = {
            selectedRegion: false,
            regionSelected: Region.None,
            bookSelected: Book.None
        }
    }

    public render(): JSX.Element {
        return (<>
            <div className="popup-wrapper">
                <div className="regions">
                    {this.state.selectedRegion ? <>
                        <h2>Select Your Retailer</h2>
                        <div className="retailer" onClick={() => this.onGoToRetailer(Retailer.Amazon)}>
                            <img src={amazon} alt="Amazon" />
                        </div>
                        {this.state.regionSelected === Region.USA && < div className="retailer" onClick={() => this.onGoToRetailer(Retailer.BarnesAndNoble)}>
                        <img src={bandn} alt="Barnes and Noble" />
                    </div>}
                        <div className="retailer" onClick={() => this.onGoToRetailer(Retailer.Kobo)}>
                            <img src={kobo} alt="Kobo" />
                        </div>
                        <div className="retailer" onClick={() => this.onGoToRetailer(Retailer.AppleBooks)}>
                            <img src={apple} alt="Apple Books" />
                        </div>
                        <div className="retailer" onClick={() => this.onGoToRetailer(Retailer.eBooks)}>
                            <img src={ebooks} alt="eBooks.com" />
                        </div>
                        {this.state.regionSelected === Region.UK && <div className="retailer" onClick={() => this.onGoToRetailer(Retailer.Waterstones)}>
                            <img src={waterstones} alt="Waterstones" />
                        </div>}
                    </> : <>
                        <h2>Select Your Region</h2>
                        <div className="region scot" onClick={() => this.onSelect(Region.UK)}>
                            <img src={uk} alt="United Kingdom" />
                        </div>
                        <div className="region" onClick={() => this.onSelect(Region.USA)}>
                            <img src={usa} alt="United States" />
                        </div>
                    </>}
                    <button className="close-button" onClick={this.onClose}>Close</button>
                </div>
            </div>
        </>)
    }

    private onSelect(region: Region): void {
        this.setState({
            regionSelected: region,
            selectedRegion: true
        })
    }

    private onGoToRetailer(retailer: Retailer): void {
        switch (this.state.regionSelected) {
            case Region.UK:
                switch (retailer) {
                    case Retailer.Amazon:
                        switch (this.state.bookSelected) {
                            case Book.Whispers:
                                window.open(BuyLinksUK["Whispers"][0].link, '_blank');
                                break;
                            case Book.Names:
                                window.open(BuyLinksUK["Names"][0].link, '_blank');
                                break;
                            case Book.Gift:
                                window.open(BuyLinksUK["Gift"][0].link, '_blank');
                                break;
                            case Book.Thread:
                                window.open(BuyLinksUK["Thread"][0].link, '_blank');
                                break;
                            case Book.Eyes:
                                window.open(BuyLinksUK["Eyes"][0].link, '_blank');
                                break;
                        }
                        break;
                    case Retailer.Kobo:
                        switch (this.state.bookSelected) {
                            case Book.Whispers:
                                window.open("https://www.kobo.com/gb/en/ebook/whispers-to-a-crow", '_blank');
                                break;
                            case Book.Names:
                                window.open("https://www.kobo.com/gb/en/ebook/names-of-the-dead-2", '_blank');
                                break;
                            case Book.Gift:
                                window.open("https://www.kobo.com/gb/en/ebook/a-gift-of-the-sea", '_blank');
                                break;
                            case Book.Thread:
                                window.open("https://www.kobo.com/gb/en/ebook/the-woven-thread-3", '_blank');
                            break;
                        }
                        break;
                        case Retailer.AppleBooks:
                        switch (this.state.bookSelected) {
                            case Book.Whispers:
                                window.open("https://tools.applemediaservices.com/book/1563887707?country=gb&ref=1445749546", '_blank');
                                break;
                            case Book.Names:
                                window.open("https://tools.applemediaservices.com/book/1561464673?country=gb&ref=1445749546", '_blank');
                                break;
                            case Book.Gift:
                                window.open("https://tools.applemediaservices.com/book/1573996625?country=gb&ref=1445749546", '_blank');
                                break;
                            case Book.Thread:
                                window.open("https://tools.applemediaservices.com/book/1617725306?country=gb&ref=1445749546", '_blank');
                            break;
                        }
                        break;
                        case Retailer.Waterstones:
                        switch (this.state.bookSelected) {
                            case Book.Whispers:
                                window.open("https://www.waterstones.com/book/whispers-to-a-crow/tristan-gray/9781838485405", '_blank');
                                break;
                            case Book.Names:
                                window.open("https://www.waterstones.com/book/names-of-the-dead/tristan-gray/9781838485436", '_blank');
                                break;
                            case Book.Gift:
                                window.open("https://www.waterstones.com/book/a-gift-of-the-sea/tristan-gray/9781838485443", '_blank');
                                break;
                            case Book.Thread:
                                window.open("https://www.waterstones.com/book/the-woven-thread/tristan-gray/9781838485467", '_blank');
                                break;
                        }
                        break;
                        case Retailer.eBooks:
                        switch (this.state.bookSelected) {
                            case Book.Whispers:
                                window.open("https://www.ebooks.com/en-gb/book/210272720/whispers-to-a-crow/tristan-gray/", '_blank');
                                break;
                            case Book.Names:
                                window.open("https://www.ebooks.com/en-gb/book/210263244/names-of-the-dead/tristan-gray/", '_blank');
                                break;
                            case Book.Gift:
                                window.open("https://www.ebooks.com/en-gb/book/210324351/a-gift-of-the-sea/tristan-gray/", '_blank');
                                break;
                            case Book.Thread:
                                window.open("https://www.ebooks.com/en-gb/book/210533335/the-woven-thread/tristan-gray/", '_blank');
                                break;
                        }
                        break;
                }
                break;
            case Region.USA:
                switch (retailer) {
                    case Retailer.Amazon:
                        switch (this.state.bookSelected) {
                            case Book.Whispers:
                                window.open("https://www.amazon.com/Whispers-Crow-Tales-Seann-%C3%80ite-ebook/dp/B08FZX3682", '_blank');
                                break;
                            case Book.Names:
                                    window.open("https://www.amazon.com/Names-Dead-Tales-Seann-%C3%80ite-ebook/dp/B08M49C3YN", '_blank');
                                    break;
                            case Book.Gift:
                                    window.open("https://www.amazon.com/Gift-Tales-Seann-%C3%80ite-Book-ebook/dp/B097NRDFT8", '_blank');
                                    break;
                            case Book.Thread:
                                    window.open("https://www.amazon.com/Woven-Thread-Tales-Seann-%C3%80ite-ebook/dp/B09WB2R4PH", '_blank');
                                break;
                            case Book.Eyes:
                                window.open("https://www.amazon.co.uk/dp/B09WB2R4PH", '_blank');
                                    break;
                        }
                        break;
                        case Retailer.BarnesAndNoble:
                        switch (this.state.bookSelected) {
                            case Book.Whispers:
                                window.open("https://www.barnesandnoble.com/w/whispers-to-a-crow-tristan-gray/1137511207", '_blank');
                                break;
                            case Book.Names:
                                window.open("https://www.barnesandnoble.com/w/names-of-the-dead-tristan-gray/1138005227", '_blank');
                                break;
                            case Book.Gift:
                                window.open("https://www.barnesandnoble.com/w/a-gift-of-the-sea-tristan-gray/1139740469", '_blank');
                                break;
                            case Book.Thread:
                                window.open("https://www.barnesandnoble.com/w/the-woven-thread-tristan-gray/1141287390?ean=9781838485467", '_blank');
                                break;
                        }
                        break;
                    case Retailer.Kobo:
                        switch (this.state.bookSelected) {
                            case Book.Whispers:
                                window.open("https://www.kobo.com/us/en/ebook/whispers-to-a-crow", '_blank');
                                break;
                            case Book.Names:
                                window.open("https://www.kobo.com/us/en/ebook/names-of-the-dead-2", '_blank');
                                break;
                            case Book.Gift:
                                window.open("https://www.kobo.com/us/en/ebook/a-gift-of-the-sea", '_blank');
                                break;
                            case Book.Thread:
                                window.open("https://www.kobo.com/us/en/ebook/the-woven-thread-3", '_blank');
                                break;
                        }
                        break;
                        case Retailer.AppleBooks:
                        switch (this.state.bookSelected) {
                            case Book.Whispers:
                                window.open("https://tools.applemediaservices.com/book/1563887707?country=us&ref=1445749546", '_blank');
                                break;
                            case Book.Names:
                                window.open("https://tools.applemediaservices.com/book/1561464673?country=us&ref=1445749546", '_blank');
                                break;
                            case Book.Gift:
                                window.open("https://tools.applemediaservices.com/book/1573996625?country=us&ref=1445749546", '_blank');
                                break;
                            case Book.Thread:
                                window.open("https://tools.applemediaservices.com/book/1617725306?country=us&ref=1445749546", '_blank');
                                break;
                        }
                        break;
                        case Retailer.eBooks:
                        switch (this.state.bookSelected) {
                            case Book.Whispers:
                                window.open("https://www.ebooks.com/en-us/book/210272720/whispers-to-a-crow/tristan-gray/", '_blank');
                                break;
                            case Book.Names:
                                window.open("https://www.ebooks.com/en-us/book/210263244/names-of-the-dead/tristan-gray/", '_blank');
                                break;
                            case Book.Gift:
                                window.open("https://www.ebooks.com/en-us/book/210324351/a-gift-of-the-sea/tristan-gray/", '_blank');
                                break;
                            case Book.Thread:
                                window.open("https://www.ebooks.com/en-us/book/210533335/the-woven-thread/tristan-gray/", '_blank');
                                break;
                            }
                        }
                break;
        }
    }

    private onClose(): void {
        this.props.onClose();
    }

    public setBook(book: Book): void {
        this.setState({ bookSelected: book });
    }
}

export default BuyPopup;