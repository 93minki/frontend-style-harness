"use client";

import { useState } from "react";

type SelectableButtonProps = {
  label: string;
  isSelected: boolean;
  disabled?: boolean;
  onClick: () => void;
};

export function SelectableButton({
  label,
  isSelected,
  disabled = false,
  onClick,
}: SelectableButtonProps) {
  function handleClick() {
    if (disabled) {
      return;
    }

    onClick();
  }

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={handleClick}
      className={`rounded-md px-4 py-2 text-sm font-medium ${
        isSelected ? "bg-black text-white" : "bg-white text-black"
      } ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
    >
      {label}
    </button>
  );
}

export function ClientExample() {
  const [selected, setSelected] = useState(false);

  return (
    <SelectableButton
      label={selected ? "선택됨" : "선택"}
      isSelected={selected}
      onClick={() => setSelected((current) => !current)}
    />
  );
}

