export default function Acoes({
  postcurtida,
  setPostCurtida,
  salvo,
  setSalvo,
}) {
  return (
    <>
      <div class="acoes">
        <div>
          {postcurtida ? (
            <ion-icon
              data-test="like-post"
              onClick={() => setPostCurtida(false)}
              name="heart-outline"
            ></ion-icon>
          ) : (
            <ion-icon
              data-test="like-post"
              onClick={() => setPostCurtida(true)}
              class="coracaovermelho"
              name="heart"
            ></ion-icon>
          )}

          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          {salvo ? (
            <ion-icon
              data-test="save-post"
              onClick={() => setSalvo(false)}
              name="bookmark-outline"
            ></ion-icon>
          ) : (
            <ion-icon
              data-test="save-post"
              onClick={() => setSalvo(true)}
              name="bookmark"
            ></ion-icon>
          )}
        </div>
      </div>
    </>
  );
}
