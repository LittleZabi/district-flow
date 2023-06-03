import HomeMiddle from "../components/home-middle";

const HomeView = () => {
  const list = [1, 2, 3, 4];
  console.log(list.at(-1));
  return (
    <div>
      {/* <dialog id="d">
        here is dialog box
        <button onClick={() => d.close()}>close</button>
      </dialog>
      <button onClick={() => d.showModal()}>Open</button> */}
     <HomeMiddle/>
    </div>
  );
};
export default HomeView;
