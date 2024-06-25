import React from "react";
import Input from "../ui/Input";
const NewProject = ({handleCancel, handleSave, handleChange, formInfo}) => {
  return (
    <form className="flex flex-col p-12 w-full pt-32">
      <div className="flex justify-end items-center gap-6">
        <button
          onClick={handleCancel}
          className="text-2xl text-stone-200 opacity-95 text-start p-4 px-6  mt-8 w-fit rounded-md bg-red-600 "
        >
          cancel
        </button>
        <button
          onClick={handleSave}
          className="text-2xl text-stone-200 opacity-95 text-start p-4 px-6 mt-8 w-fit rounded-md bg-green-600 bg-opacity-90 "
        >
          Save
        </button>
      </div>
      <Input
        onChange={handleChange}
        value={formInfo.title}
        id="title"
        label="title"
        type="text"
      />
      <Input
        onChange={handleChange}
        value={formInfo.description}
        id="description"
        label="description"
        type="textArea"
      />
      <Input
        onChange={handleChange}
        value={formInfo.date}
        id="date"
        label="due date"
        type="date"
      />
    </form>
  );
};

export default NewProject;
