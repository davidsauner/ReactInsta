import { useState } from "react";
import Acoes from "./Acoes";

export default function Post({ name, imgpost, curtida, numerocurtidas }) {
  const [postcurtida, setPostCurtida] = useState(true);
  const [salvo, setSalvo] = useState(true);
  return (
    <>
      <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={`assets/img/${name}.svg`} alt={curtida} />
            {name}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div data-test="post" class="conteudo">
          <img
            data-test="post-image"
            onClick={() => setPostCurtida(false)}
            src={`assets/img/${imgpost}.svg`}
            alt={imgpost}
          />
        </div>

        <div class="fundo">
          <Acoes
            postcurtida={postcurtida}
            setPostCurtida={setPostCurtida}
            salvo={salvo}
            setSalvo={setSalvo}
          />

          <div class="curtidas">
            <img src={`assets/img/${curtida}.svg`} alt={curtida} />

            {postcurtida ? (
              <div class="texto">
                Curtido por <strong>{curtida}</strong> e{" "}
                <strong data-test="like-number">
                  outras {numerocurtidas} pessoas
                </strong>
              </div>
            ) : (
              <div class="texto">
                Curtido por <strong>{curtida}</strong> e{" "}
                <strong data-test="like-number">
                  outras {numerocurtidas + 1} pessoas
                </strong>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
