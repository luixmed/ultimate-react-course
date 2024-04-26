import { Button } from "./ClearListStyled";

function ClearList({ onClearList }) {
  return <Button onClick={onClearList}>Clear list</Button>;
}

export default ClearList;
