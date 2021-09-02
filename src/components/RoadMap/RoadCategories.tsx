import useWindowWidth from "../../hooks/useWindowWidth";

const RoadCategories = () => {
  const SIZE = useWindowWidth();
  const isMobile = SIZE.width! < 380;

  return (
    <div>
      {isMobile ? (
        <p>asdasdsad</p>
      ) : (
        <h2>
          abcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefg
        </h2>
      )}
    </div>
  );
};

export default RoadCategories;
