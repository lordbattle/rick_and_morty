import Card from "./Card";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div>
      {characters.map(({ name, species, gender, image, id }) => {
        return (
          <Card
            key={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={() => alert("Emulando Cierre de Carta")}
          />
        );
      })}
    </div>
  );
}
