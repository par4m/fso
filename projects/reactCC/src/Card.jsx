function Card(props) {
  return (
    <>
      <h2>Product Name {props.name}</h2>
      <p>${props.price}</p>
    </>
  );
}

export default Card;
