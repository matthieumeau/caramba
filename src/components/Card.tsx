function Card({ number, sign }: { number: string; sign: string }) {
  const card_name = number + "_of_" + sign + ".svg";
  const path = "./src/assets/" + card_name;

  return (
    <>
      <img src={path}></img>
    </>
  );
}

export default Card;
