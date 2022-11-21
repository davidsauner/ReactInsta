import Post from "./Post";

export default function Posts() {
  const conteudopost = [
    {
      name: "meowed",
      imgpost: "gato-telefone",
      curtida: "respondeai",
      numerocurtidas: 101523,
    },
    {
      name: "barked",
      imgpost: "dog",
      curtida: "adorable_animals",
      numerocurtidas: 99159,
    },
  ];
  return (
    <>
      <div class="posts">
        {conteudopost.map((v) => (
          <Post
            key={v.name}
            name={v.name}
            imgpost={v.imgpost}
            curtida={v.curtida}
            numerocurtidas={v.numerocurtidas}
          />
        ))}
      </div>
    </>
  );
}
