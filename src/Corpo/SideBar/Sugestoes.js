function ListaSugestao({ name, segue }) {
  return (
    <>
      <div class="sugestao">
        <div class="usuario">
          <img src={`assets/img/${name}.svg`} alt={name} />
          <div class="texto">
            <div class="nome">{name}</div>
            <div class="razao">{segue}</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>
      ;
    </>
  );
}

export default function Sugestoes() {
  const sugest = [
    {
      name: "bad.vibes.memes",
      segue: "Segue você",
    },
    {
      name: "chibirdart",
      segue: "Segue você",
    },
    {
      name: "razoesparaacreditar",
      segue: "Novo no Instagram",
    },
    {
      name: "adorable_animals",
      segue: "Segue você",
    },
    {
      name: "smallcutecats",
      segue: "Segue você",
    },
  ];
  return (
    <>
      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        {sugest.map((v) => (
          <ListaSugestao key={v.name} name={v.name} segue={v.segue} />
        ))}
      </div>
    </>
  );
}
