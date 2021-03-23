import { ListItem } from "../ListItem";
import "./style.css";
import { IList } from "models";

export const List = ({
  list,
  readOnly,
  editListItem,
  removeListItem
}: IList) => {
  return (
    <div className="List">
      {list.length === 0 ? (
        <div className="List-empty-message">
          No Network / IP Address / IP range or Domain Added just yet
        </div>
      ) : (
        list.map(listItem => (
          <ListItem
            key={`listItem-${listItem.id}`}
            readOnly={readOnly}
            onEdit={editListItem}
            onDelete={removeListItem}
            data={listItem}
          />
        ))
      )}
    </div>
  );
};
