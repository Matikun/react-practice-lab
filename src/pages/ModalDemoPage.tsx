import { useState } from "react";
import { Modal } from "../examples/portals-modal";

export const ModalDemoPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">🌀 Modal with Portal</h2>
      <p className="mb-4 text-zinc-400">
        Open dev tools → Elements tab to see the modal rendered outside the
        root!
      </p>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Open Modal
      </button>

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <h3 className="text-lg font-semibold mb-2">I'm a Modal!</h3>
          <p className="mb-4">
            This is rendered outside the main React DOM tree.
          </p>
          <button
            onClick={() => setIsOpen(false)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Close
          </button>
        </Modal>
      )}
    </div>
  );
};
