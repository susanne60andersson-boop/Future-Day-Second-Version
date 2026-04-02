import { useTaco } from "./hooks/useTaco";
import { Header } from "./components/Header";
import { StepDelivery } from "./components/StepDelivery";
import { StepSpice } from "./components/StepSpice";
import { StepCategory } from "./components/StepCategory";
import { StepDrink } from "./components/StepDrink";
import { Summary } from "./components/Summary";

export default function App() {
  const taco = useTaco();

  const renderStep = () => {
    switch (taco.step) {
      case 1:
        return <StepDelivery {...taco} />;
      case 2:
        return <StepSpice {...taco} />;
      case 3:
        return <StepCategory category="Bröd" next={4} {...taco} />;
      case 4:
        return <StepCategory category="Färs" next={5} {...taco} />;
      case 5:
        return <StepCategory category="Grönsaker" next={6} {...taco} />;
      case 6:
        return <StepCategory category="Ost" next={7} {...taco} />;
      case 7:
        return <StepCategory category="Dips & Såser" next={8} {...taco} />;
      case 8:
        return <StepDrink {...taco} />;
      case 9:
        return <Summary {...taco} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-pink-600 to-red-600 p-6 md:p-10">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur rounded-3xl p-6 md:p-10 shadow-lg">
        <Header />
        {renderStep()}
      </div>
    </div>
  );
}