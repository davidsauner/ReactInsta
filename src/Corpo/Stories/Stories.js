import Story from "./Story";

export default function Stories() {
  const namestories = [
    "9gag",
    "meowed",
    "barked",
    "nathanwpylestrangeplanet",
    "wawawicomics",
    "respondeai",
    "filomoderna",
    "memeriagourmet",
  ];

  return (
    <>
      <div class="stories">
        {namestories.map((v) => (
          <Story key={v} name={v} />
        ))}

        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>
    </>
  );
}
