import useWindowWidth from "../../hooks/useWindowWidth";

const RoadCategories = () => {
  const SIZE = useWindowWidth();
  const isMobile = SIZE.width! < 380;

  return (
    <div
    // justify-content:space-between;
    >
      <div
      // flex-direction:column;
      >
        <div>
          <h2>Planned(2)</h2>
          <p>Ideas priortized for research</p>
        </div>
        <ul>
          <li>
            <span>planned</span>
            <h3>more comprehensive</h3>
            <p>it would be great......</p>
            <button>feature</button>
            <div
            // justfiy-content:space-between
            >
              <button>Icon 123</button>
              <button>Icon 2 </button>
            </div>
          </li>
        </ul>
      </div>
      <div>2</div>
      <div>3</div>
    </div>
  );
};

export default RoadCategories;
