import "./style.css";
import LockIcon from "@material-ui/icons/Lock";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { IHeader } from "models";

export const Header = ({ title, readOnly, setReadOnly }: IHeader) => {
  return (
    <header className="Header">
      <span className="Header-title">{title}</span>
      <div className="button" onClick={() => setReadOnly(!readOnly)}>
        {readOnly ? <LockIcon /> : <LockOpenIcon />}
      </div>
    </header>
  );
};
