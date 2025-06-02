"use client";

import { useEffect, useState } from "react";

type Attempt = {
  guess: string;
  bulls: number;
  cows: number;
};

export default function JogoPage() {
  const [secret, setSecret] = useState("");
  const [input, setInput] = useState("");
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [message, setMessage] = useState("");
  const [gameOver, setGameOver] = useState(false);

  // Gera senha aleatória única de 4 dígitos
  const generateSecret = () => {
    let digits = new Set<number>();
    while (digits.size < 4) {
      digits.add(Math.floor(Math.random() * 10));
    }
    return Array.from(digits).join("");
  };

  // Reinicia o jogo
  const resetGame = () => {
    const newSecret = generateSecret();
    setSecret(newSecret);
    setInput("");
    setAttempts([]);
    setMessage("");
    setGameOver(false);
  };

  // Executado uma vez ao montar
  useEffect(() => {
    resetGame();
  }, []);

  const handleGuess = () => {
    if (input.length !== 4 || new Set(input).size !== 4 || !/^\d+$/.test(input)) {
      alert("Digite 4 dígitos únicos.");
      return;
    }

    if (gameOver) return;

    const bulls = input.split("").filter((d, i) => d === secret[i]).length;
    const cows =
      input.split("").filter((d) => secret.includes(d)).length - bulls;

    const newAttempt: Attempt = { guess: input, bulls, cows };
    const newAttempts = [newAttempt, ...attempts];

    setAttempts(newAttempts);
    setInput("");

    if (bulls === 4) {
      setMessage("🎉 Parabéns! Você acertou a senha!");
      setGameOver(true);
    } else if (newAttempts.length >= 10) {
      setMessage(`😢 Fim de jogo! A senha era ${secret}`);
      setGameOver(true);
    }
  };

 return (
  <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center px-4 py-10">
    <div className="bg-slate-800 rounded-xl shadow-2xl p-8 w-full max-w-md">
      <h1 className="text-3xl font-bold text-center text-blue-400 mb-6">
        Jogo da Senha 🔐
      </h1>

      <div className="mb-4 text-center">
        <button
          onClick={() => alert(`🔍 Senha atual (debug): ${secret}`)}
          className="text-sm underline text-blue-300 hover:text-blue-200"
        >
          Mostrar senha
        </button>
      </div>

      <div className="flex items-center justify-center gap-3 mb-6">
        <input
          type="text"
          maxLength={4}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-slate-700 border border-slate-600 rounded px-4 py-2 w-28 text-center text-xl tracking-widest focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={gameOver}
        />
        <button
          onClick={handleGuess}
          className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded text-white font-semibold disabled:opacity-50"
          disabled={gameOver}
        >
          Enviar
        </button>
      </div>

      {message && (
        <div className="mb-4 text-center text-lg font-semibold text-green-400">
          {message}
        </div>
      )}

      {gameOver && (
        <div className="text-center mb-6">
          <button
            onClick={resetGame}
            className="bg-green-600 hover:bg-green-700 transition px-4 py-2 rounded text-white font-semibold"
          >
            Novo Jogo
          </button>
        </div>
      )}

      <h2 className="text-lg font-semibold mb-2 text-blue-200">Tentativas:</h2>
      <ul className="space-y-2 max-h-64 overflow-y-auto pr-1">
        {attempts.map((a, i) => (
          <li
            key={i}
            className="flex justify-between border border-slate-600 bg-slate-700 px-4 py-2 rounded text-sm"
          >
            <span className="font-mono text-blue-300">{a.guess}</span>
            <span>
              🐂 {a.bulls} | 🐄 {a.cows}
            </span>
          </li>
        ))}
        {attempts.length === 0 && (
          <li className="text-slate-400 text-sm">Nenhuma tentativa ainda.</li>
        )}
      </ul>
    </div>
  </div>
);

}
