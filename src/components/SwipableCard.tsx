function Card(props: {
    url: string,
    alt: string,
}) {
    return <img className="Card" src={props.url} alt={props.alt} />;
}

export default Card;