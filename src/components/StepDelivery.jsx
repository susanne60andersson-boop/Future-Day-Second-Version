export function StepDelivery({ delivery, setDelivery, setStep }) {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center">Hur vill du ha din taco?</h2>
      
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
        <button
          onClick={() => {
            setDelivery("takeaway");
            setStep(2);
          }}
          className={`px-8 py-6 md:px-10 md:py-8 rounded-2xl border-2 font-bold text-xl transition ${
            delivery === "takeaway"
              ? "bg-purple-600 text-white border-purple-600"
              : "bg-white hover:bg-purple-100 border-purple-600"
          }`}
        >
          🛒 Ta med
        </button>
        
        <button
          onClick={() => {
            setDelivery("eatIn");
            setStep(2);
          }}
          className={`px-8 py-6 md:px-10 md:py-8 rounded-2xl border-2 font-bold text-xl transition ${
            delivery === "eatIn"
              ? "bg-purple-600 text-white border-purple-600"
              : "bg-white hover:bg-purple-100 border-purple-600"
          }`}
        >
          🍴 Äta här
        </button>
      </div>
    </div>
  );
}
