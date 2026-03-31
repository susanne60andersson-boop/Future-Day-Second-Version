import { useTaco } from "./hooks/useTaco";
import { Header } from "./components/Header";
import { StepSpice } from "./components/StepSpice";
import { StepCategory } from "./components/StepCategory";
import { Summary } from "./components/Summary";

export default function App() {
  const taco = useTaco();

  const renderStep = () => {
    switch (taco.step) {
      case 1:
        return <StepSpice {...taco} />;
      case 2:
        return <StepCategory category="Bröd" next={3} {...taco} />;
      case 3:
        return <StepCategory category="Färs" next={4} {...taco} />;
      case 4:
        return <StepCategory category="Grönsaker" next={5} {...taco} />;
      case 5:
        return <Summary {...taco} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-pink-200 to-red-300 p-4">
      <div className="max-w-md mx-auto">
        <Header />
        {renderStep()}
      </div>
    </div>
  );
}