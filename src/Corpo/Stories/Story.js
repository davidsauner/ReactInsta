export default function Story({ name }) {
  return (
    <>
      <div class="story">
        <div class="imagem">
          <img src={`assets/img/${name}.svg`} alt={name} />
        </div>
        <div class="usuario">{name}</div>
      </div>
    </>
  );
}
