'use client';
import { useState } from 'react';

export default function MiningPage() {
  const [status, setStatus] = useState('idle');
  const [xpGained, setXpGained] = useState(0);
  const [oreId, setOreId] = useState('coal');

  async function startMining() {
    await fetch('/api/mining/start', {
      method: 'POST',
      body: JSON.stringify({ oreId }),
    });
    setStatus('mining');
  }

  async function collectMining() {
    const res = await fetch('/api/mining/collect', { method: 'POST' });
    const data = await res.json();
    setXpGained((prev) => prev + data.xp);
    setStatus('idle');
  }

  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-bold mb-4">Mining</h1>
      <p>Status: {status === 'mining' ? '⛏️ Mining...' : 'Idle'}</p>
      <p>Total XP Gained: {xpGained}</p>
      <div className="mt-4 flex gap-4">
        <button onClick={startMining} className="bg-blue-600 px-4 py-2 rounded text-white">
          Start Mining
        </button>
        <button onClick={collectMining} className="bg-green-600 px-4 py-2 rounded text-white">
          Collect & Stop
        </button>
      </div>
    </div>
  );
}
