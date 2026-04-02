import { useState } from "react";
import { multiSelect } from "../data/tacoData";

export function useTaco() {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState([]);
  const [spice, setSpice] = useState(null);
  const [delivery, setDelivery] = useState(null);
  const [drink, setDrink] = useState(null);

  const reset = () => {
    setStep(1);
    setSelected([]);
    setSpice(null);
    setDelivery(null);
    setDrink(null);
  };

  const toggleItem = (category, item) => {
    const isMulti = multiSelect.includes(category);

    setSelected((prev) => {
      const exists = prev.find(
        (i) => i.name === item.name && i.category === category
      );

      if (isMulti) {
        return exists
          ? prev.filter((i) => i.name !== item.name)
          : [...prev, { ...item, category }];
      }

      return [
        ...prev.filter((i) => i.category !== category),
        { ...item, category }
      ];
    });
  };

  const total = selected.reduce((sum, i) => sum + i.price, 0) + (drink?.price ?? 0);

  return {
    step,
    setStep,
    selected,
    spice,
    setSpice,
    delivery,
    setDelivery,
    drink,
    setDrink,
    toggleItem,
    total,
    reset
  };
}