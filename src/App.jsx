import { useState } from "react";
import { motion } from "framer-motion";

function calculateAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);

  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();

  if (days < 0) {
    months -= 1;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months, days };
}

function App() {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(null);

  const handleCalculate = () => {
    if (!birthDate) return;
    const result = calculateAge(birthDate);
    setAge(result);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-center mb-6">🎂 Kalkulator Umur</h1>
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300 mb-4"
        />
        <button
          onClick={handleCalculate}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Hitung Umur
        </button>

        {age && (
          <motion.div
            className="mt-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-lg">
              Kamu berumur:
            </p>
            <p className="text-2xl font-bold mt-2">
              {age.years} tahun, {age.months} bulan, {age.days} hari
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default App;
