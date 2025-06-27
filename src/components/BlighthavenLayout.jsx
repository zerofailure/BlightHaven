import { useState } from 'react';

export default function BlighthavenLayout() {
  const [chatTab, setChatTab] = useState('global');

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
      {/* Left Navigation */}
      <aside style={{ width: '250px', backgroundColor: '#1e293b', padding: '1rem', overflowY: 'auto' }}>
        <h2 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Skills</h2>
        <ul>
          {['Milking', 'Foraging', 'Woodcutting', 'Cheesesmithing', 'Crafting', 'Tailoring', 'Cooking', 'Brewing', 'Alchemy', 'Enhancing', 'Combat', 'Stamina', 'Intelligence', 'Attack', 'Power', 'Defense', 'Magic', 'Ranged'].map(skill => (
            <li key={skill} style={{ margin: '0.5rem 0', cursor: 'pointer' }}>{skill}</li>
          ))}
        </ul>
        <div style={{ marginTop: '2rem' }}>
          <h2 style={{ fontWeight: 'bold' }}>Menu</h2>
          <ul>
            {['Marketplace', 'Tasks', 'Guild', 'Leaderboard', 'Settings'].map(item => (
              <li key={item} style={{ margin: '0.5rem 0', cursor: 'pointer' }}>{item}</li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Center Content */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', borderLeft: '1px solid #334155', borderRight: '1px solid #334155' }}>
        <div style={{ flex: 1, padding: '1rem', overflowY: 'auto' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Battle #133</h1>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ padding: '1rem', backgroundColor: '#1e293b', textAlign: 'center' }}>
              <p style={{ fontWeight: 'bold' }}>Ethanol</p>
              <p style={{ color: 'lightgreen' }}>1040 / 1040 HP</p>
              <p style={{ color: 'lightblue' }}>4 / 910 MP</p>
            </div>
            <div style={{ padding: '1rem', backgroundColor: '#1e293b', textAlign: 'center' }}>
              <p style={{ fontWeight: 'bold' }}>Shooty</p>
              <p style={{ color: 'red' }}>34 / 800 HP</p>
              <p style={{ color: 'lightblue' }}>268 / 800 MP</p>
            </div>
          </div>
        </div>

        {/* Chat Section */}
        <div style={{ backgroundColor: '#1e293b', padding: '1rem', borderTop: '1px solid #334155' }}>
          <div>
            <button onClick={() => setChatTab('global')} style={{ marginRight: '1rem' }}>Global Chat</button>
            <button onClick={() => setChatTab('battle')}>Battle Chat</button>
          </div>
          <div style={{ marginTop: '1rem', height: '100px', overflowY: 'auto', backgroundColor: '#0f172a', padding: '0.5rem' }}>
            [{chatTab === 'global' ? 'Global' : 'Battle'} chat messages...]
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside style={{ width: '280px', backgroundColor: '#1e293b', padding: '1rem', overflowY: 'auto' }}>
        <h2 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Equipment</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
          {[...Array(12)].map((_, i) => (
            <div key={i} style={{ padding: '1rem', backgroundColor: '#334155', textAlign: 'center' }}>Slot {i + 1}</div>
          ))}
        </div>
      </aside>
    </div>
  );
}
