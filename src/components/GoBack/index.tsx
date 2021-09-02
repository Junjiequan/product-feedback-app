import * as GB from "./GoBackElements";
import { useHistory } from "react-router";
import ICON from "../../assets/shared/icon-arrow-left.svg";
type ButtonProps = {
  isWhite: boolean;
};
const GoBack = ({ isWhite }: ButtonProps) => {
  const history = useHistory();
  const goBack = () => history.goBack();
  return (
    <GB.Button data-white={isWhite} onClick={goBack}>
      <GB.LeftIcon data-white={isWhite} src={ICON} />
      <GB.Txt data-white={isWhite}>Go Back</GB.Txt>
    </GB.Button>
  );
};

export default GoBack;
