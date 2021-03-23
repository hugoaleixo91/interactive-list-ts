import React, { FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./style.css";
import AddIcon from "@material-ui/icons/Add";
import ErrorIcon from "@material-ui/icons/Error";
import { Spinner } from "../Spinner";
import { IInputContainer } from "models";

export const InputContainer = ({ data, onSubmit }: IInputContainer) => {
  const [value, setValue] = useState<string>(data?.value || "");
  const [isValid, setIsValid] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (
    evt: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setIsValid(true);
    setValue(evt.target.value);
  };

  const handleInputSubmit = async (evt: FormEvent): Promise<void> => {
    evt.preventDefault();
    setIsLoading(true);
    setIsValid(true);
    const submissionValidated = await onSubmit({
      id: data?.id || uuidv4(),
      value
    });

    setIsValid(submissionValidated);
    setIsLoading(false);
    if (submissionValidated) setValue("");
  };

  return (
    <form
      className={`InputContainer ${!isValid ? "invalid" : ""}`}
      onSubmit={handleInputSubmit}
    >
      <input
        className="InputContainer-input"
        type="text"
        placeholder="(e.g: www.website.com/ ) use Enter or + to add it to list"
        value={value}
        onChange={handleInputChange}
        autoFocus
      />

      {isLoading ? (
        <Spinner />
      ) : (
        <div
          className="InputContainer-btn-submit button"
          onClick={handleInputSubmit}
        >
          {isValid ? <AddIcon /> : <ErrorIcon />}
        </div>
      )}
    </form>
  );
};
