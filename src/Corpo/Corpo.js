import Posts from "./Posts/Posts";
import SideBar from "./SideBar/SideBar";
import Stories from "./Stories/Stories";

export default function Corpo() {
  return (
    <>
      <div class="corpo">
        <div class="esquerda">
          <Stories />
          <Posts />
        </div>
        <SideBar />
      </div>
    </>
  );
}
