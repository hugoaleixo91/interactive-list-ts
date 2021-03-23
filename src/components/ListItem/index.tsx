import { useState } from "react";
import "./style.css";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { InputContainer } from "../InputContainer";
import { Idata, IListItem } from "models";

export const ListItem = ({ data, onEdit, onDelete, readOnly }: IListItem) => {
  const [editMode, setEditMode] = useState(false);
  const handleEdit = async (value: Idata): Promise<boolean> => {
    const editSuccess = await onEdit(value);
    if (editSuccess) setEditMode(false);
    return editSuccess;
  };

  return (
    <>
      {!readOnly && editMode ? (
        <InputContainer data={data} onSubmit={handleEdit} />
      ) : (
        <div className={`ListItem ${editMode ? "editable" : ""}`}>
          <div className="ListItem-value">{data.value}</div>
          {!readOnly && (
            <>
              <div
                className="ListItem-btn-edit ListItem-btn button"
                onClick={() => setEditMode(true)}
              >
                <EditIcon />
              </div>
              <div
                className="ListItem-btn-delete ListItem-btn button"
                onClick={() => onDelete(data.id)}
              >
                <DeleteIcon />
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};
