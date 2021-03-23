export interface Idata {
  id: number | string;
  value: string;
}

export interface IInputContainer {
  data?: Idata;
  onSubmit: (value: Idata) => Promise<boolean>;
}

export interface IHeader {
  title: string;
  readOnly: boolean;
  setReadOnly: (value: boolean) => void;
}

export interface IList {
  list: Idata[];
  readOnly: boolean;
  editListItem: (value: Idata) => Promise<boolean>;
  removeListItem: (id: number | string) => void;
}

export interface IListItem {
  data: Idata;
  onEdit: (value: Idata) => Promise<boolean>;
  onDelete: (id: number | string) => void;
  readOnly: boolean;
}
