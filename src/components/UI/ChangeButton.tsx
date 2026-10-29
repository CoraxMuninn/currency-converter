import { useState } from "react";

export default function ChangeButton({ onChange }: { onChange: () => void }) {
  const [rotation, setRotation] = useState(0);

  function handleChangeButton() {
    setRotation((prev) => prev + 1);
    onChange();
  }

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handleChangeButton}
        className="w-10 h-10 bg-yellow-400 rounded-full cursor-pointer hover:-translate-y-0.5 transition-transform duration-300"
      >
        <img
          src="/exchang.svg"
          alt="Exchange button"
          key={rotation}
          className={rotation > 0 ? "spin-button" : ""}
        />
      </button>
    </div>
  );
}
