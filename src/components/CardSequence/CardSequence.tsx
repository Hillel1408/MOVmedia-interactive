import { useEffect, useState } from "react";
import {
  type DropResult,
  DragDropContext,
  Droppable,
  Draggable,
} from "@hello-pangea/dnd";

import tach from "@/assets/icons/tach.svg";

type Item = {
  id: string;
  icon: string;
  iconBg: string;
  title: string;
};

type Props = {
  items: Item[];
  correctOrder: string[];
  onSuccess?: () => void;
};

export default function CardSequence({
  items,
  correctOrder,
  onSuccess,
}: Props) {
  const [pool, setPool] = useState<Item[]>(() => items);

  const [slots, setSlots] = useState<(Item | null)[]>(() =>
    Array(correctOrder.length).fill(null),
  );

  const [wrong, setWrong] = useState<Record<string, boolean>>({});

  const isCompletedCorrectly = (slots: (Item | null)[]) => {
    return slots.every((slot, index) => {
      if (!slot) return false;

      return slot.id === correctOrder[index];
    });
  };

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.droppableId !== "pool") return;

    const draggedItem = pool[source.index];

    if (!draggedItem) return;

    const slotIndex = Number(destination.droppableId.replace("slot-", ""));

    if (Number.isNaN(slotIndex)) return;

    if (slots[slotIndex]) return;

    const isCorrectPlacement = correctOrder[slotIndex] === draggedItem.id;

    const newPool = pool.filter((_, idx) => idx !== source.index);

    const newSlots = [...slots];

    newSlots[slotIndex] = draggedItem;

    setPool(newPool);
    setSlots(newSlots);

    if (!isCorrectPlacement) {
      setWrong((prev) => ({
        ...prev,
        [draggedItem.id]: true,
      }));

      setTimeout(() => {
        setWrong((prev) => {
          const copy = { ...prev };

          delete copy[draggedItem.id];

          return copy;
        });

        setPool((prev) => [...prev, draggedItem]);

        setSlots((prev) => {
          const updated = [...prev];

          updated[slotIndex] = null;

          return updated;
        });
      }, 3000);
    }
  };

  useEffect(() => {
    if (slots.every(Boolean) && isCompletedCorrectly(slots)) {
      onSuccess?.();
    }
  }, [slots, correctOrder, onSuccess]);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="w-137.25 p-6 rounded-3xl bg-[#F7EBE2] flex flex-col gap-4">
        <Droppable droppableId="pool">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="bg-[#E9DACB] p-4 rounded-3xl flex flex-col gap-2 h-87"
            >
              {pool.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="px-6 h-18.25 bg-white rounded-2xl flex items-center gap-4 border border-[#E4E4E4] cursor-pointer"
                    >
                      <img src={tach} alt="Иконка" />

                      <div
                        className="min-w-14 h-14 rounded-xl flex items-center justify-center"
                        style={{
                          backgroundColor: item.iconBg,
                        }}
                      >
                        <img src={item.icon} alt={item.title} />
                      </div>

                      <p className="font-semibold text-[20px] ml-4">
                        {item.title}
                      </p>
                    </div>
                  )}
                </Draggable>
              ))}

              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <div className="bg-[#E9DACB] p-4 rounded-3xl flex flex-col gap-2 max-h-87">
          {slots.map((item, index) => {
            const isCorrect = item && correctOrder[index] === item.id;

            const isWrong = item && wrong[item.id];

            return (
              <Droppable key={index} droppableId={`slot-${index}`}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`min-h-18.25 rounded-2xl border-2 border-dotted flex items-center justify-center transition-colors duration-300
                      ${
                        isCorrect
                          ? "border-green-500 bg-green-50"
                          : isWrong
                            ? "border-red-500 bg-red-50"
                            : "border-white"
                      }`}
                  >
                    {item && (
                      <div className="flex items-center gap-4 w-full px-6 rounded-2xl h-full">
                        <img src={tach} alt="Иконка" />

                        <div
                          className="min-w-14 h-14 rounded-xl flex items-center justify-center"
                          style={{
                            backgroundColor: item.iconBg,
                          }}
                        >
                          <img src={item.icon} alt={item.title} />
                        </div>

                        <p className="font-semibold text-[20px] ml-4">
                          {item.title}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </Droppable>
            );
          })}
        </div>
      </div>
    </DragDropContext>
  );
}
