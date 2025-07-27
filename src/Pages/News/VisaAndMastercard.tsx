import NewsContainer from "./NewsContainer";
import VisaMastercard from "../../images/Visa and Mastercard.png";

export function VisaAndMastercard() {
  const news = (
    <>
      <img
        src={VisaMastercard}
        alt="Visa and Mastercard Logos as Eye of Sauron looking at 18+"
      />
      <p>
        This week{" "}
        <a href="https://www.ibtimes.co.uk/mastercard-visa-under-fire-petition-payment-giants-not-police-legal-content-blows-1739406">
          Visa and Mastercard used their complete control over the payment
          processing of creative platforms Steam and itch.io
        </a>{" "}
        to force both websites to eradicate everything they consider to be
        "problematic" content online. This included all work labelled "NSFW"
        (not safe for work) which in turn included the works, 18+ rated or not,
        of tens of thousands of queer creators on those platforms. These
        creators were given no warning and immediately faced their works, and
        often their livlihoods, being abruptly shut down.
      </p>
      <p>
        This mass book-burning of queer content online was performed on behalf
        of the small activist group 'Collective Shout', led by Australian
        anti-abortion activist Melinda Tankard Reist. However, this campaign has
        not targeted media in Australia, it has targeted the censorship of
        creators worldwide. It is the imposition of conservative ideology on
        everyone, and that ideology includes the eradication of queer content
        online.
      </p>
      <p>
        'Adults are capable of choosing what they want to watch, read, or play.
        If someone doesn't like a certain type of entertainment, the solution is
        simple: walk away. Nobody is forced to engage with content they find
        offensive — but they have no right to dictate what others are allowed to
        enjoy, especially when it's within the bounds of the law.'
      </p>
      <p>
        We know that organisations like 'Collective Shout' and other
        conservative lobby groups consider our community to be, by nature,
        obscene. They see our lives and identities as adult content by nature
        and attempt to eradicate our presence in society on that basis. We have
        seen that play out this week in the assault on queer creators driven by
        Visa and Mastercard, an assault that must be resisted.
      </p>
      <p>
        Groups like 'Collective Shout' rely on the calculation by these
        corporations that it is less hassle to comply with their demands than
        not. It is vital we prove that the opposite is true. 'Collective Shout'
        claimed it took 1,000 phonecalls to deliver this mass online
        book-burning. There are far more of us than 1,000. Pick up the phone,
        make sure Visa and Mastercard cannot ignore us.
      </p>
      <p>
        You can sign the petition here, but make sure this is not all you do.
        Phone calls have 1000x more impact than a petition signature.
        <a href="chng.it/s5vvfnfN6z">
          Tell MasterCard, Visa & Activist Groups: Stop Controlling What We Can
          Watch, Read, or Play.
        </a>
      </p>
      <p>
        <a href="https://stop-paypros.neocities.org">
          Further information on how to respond.
        </a>
      </p>
      <p>
        Credit to{" "}
        <a href="https://bsky.app/profile/icalasari.illusoria.ca">Vee</a>
        <br />
        # to complain to Mastercard, Visa, & Paypal
        <br />
        <br />
        Mastercard (Int.): +1-636-722-7111
        <br />
        Mastercard (US Alt. #): 1-800-627-8372
        <br />
        Mastercard (US): 1-800-307-7309
        <br />
        <br />
        Mastercard (UK): 0800-96-4767
        <br />
        Mastercard (Aus): 1800-120-113
        <br />
        Visa (US + Can): 1 800 847 2911
        <br />
        <br />
        Visa (AUS): 1 800 125 440
        <br />
        PayPal: +44-0203-901-7000
        <br />
        <br />
        "Remember, phone calls are the most effective - Emails can more easily
        be ignored"
      </p>
    </>
  );
  return NewsContainer(
    news,
    "Visa and Mastercard are Silencing Queer Creators Online"
  );
}
