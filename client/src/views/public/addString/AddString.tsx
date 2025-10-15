"use client";

import React, { ChangeEvent, FC, useState, MouseEvent } from "react";

export const AddString: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>(""); // select value
  const [items, setItems] = useState<string[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  // ইনপুট থেকে মান নেওয়া
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // সিলেক্ট থেকে মান নেওয়া
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  // যোগ বা আপডেট
  const handleAddAndUpdate = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputValue.trim() === "" || selectedOption === "") return;

    const combinedValue = `${inputValue} (${selectedOption})`;

    if (editIndex !== null) {
      const updateValues = [...items];
      updateValues[editIndex] = combinedValue;
      setItems(updateValues);
      setEditIndex(null);
    } else {
      setItems((prev) => [...prev, combinedValue]);
    }

    setInputValue("");
    setSelectedOption("");
  };

  // রিমুভ
  const handleRemove = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  // এডিট
  const handleEdit = (index: number) => {
    const [name, category] = items[index].split(" (");
    setInputValue(name);
    setSelectedOption(category?.replace(")", "") || "");
    setEditIndex(index);
  };

  return (
    <div className="p-4">
      <div className="flex gap-2">
        {/* ইনপুট */}
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Type something"
          className="border p-2 rounded"
        />

        {/* সিলেক্ট */}
        <select
          value={selectedOption}
          onChange={handleSelectChange}
          className="border p-2 rounded"
        >
          <option value="">Select category</option>
          <option value="Fruit">Fruit</option>
          <option value="Vegetable">Vegetable</option>
          <option value="Other">Other</option>
        </select>

        {/* Add/Update বাটন */}
        <button
          onClick={handleAddAndUpdate}
          className={`${
            editIndex !== null ? "bg-green-500" : "bg-blue-500"
          } text-white px-4 py-2 rounded`}
        >
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      {/* লিস্ট */}
      <ul className="mt-4 space-y-2">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex justify-between items-center border p-2 rounded"
          >
            <span>{item}</span>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(i)}
                className="bg-yellow-500 text-white px-2 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleRemove(i)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
