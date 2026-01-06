import React from 'react';

interface HeaderProps {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentFilter, onFilterChange }) => {
  const filters = [
    { key: 'all', label: 'VŠECHNY', emoji: '🎮' },
    { key: 'arcade', label: 'ARKÁDY', emoji: '👾' },
    { key: 'platform', label: 'PLOŠINOVKY', emoji: '🏃' },
    { key: 'action', label: 'AKČNÍ', emoji: '⚡' },
    { key: 'puzzle', label: 'PUZZLE', emoji: '🧩' },
    { key: 'rpg', label: 'RPG', emoji: '⚔️' },
  ];

  return (
    <header className="relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full opacity-20 animate-pulse"
          style={{
            background: `
              linear-gradient(45deg, 
                transparent 25%, 
                rgba(255, 0, 127, 0.1) 25%, 
                rgba(255, 0, 127, 0.1) 75%, 
                transparent 75%
              ),
              linear-gradient(-45deg, 
                transparent 25%, 
                rgba(0, 255, 255, 0.1) 25%, 
                rgba(0, 255, 255, 0.1) 75%, 
                transparent 75%
              )
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Main title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-pixel text-transparent bg-clip-text bg-gradient-to-r from-retro-pink via-retro-blue to-retro-purple mb-4 text-neon">
            RETRO HRY
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-retro-pink to-retro-blue mx-auto mb-4"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Objevte legendární hry, které definovaly herní průmysl. 
            Od arkádových klasik po plošinovky, které změnily svět.
          </p>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map(filter => (
            <button
              key={filter.key}
              onClick={() => onFilterChange(filter.key)}
              className={`
                px-4 py-2 font-bold text-sm border-2 rounded-lg transition-all duration-300 tracking-wider
                ${currentFilter === filter.key 
                  ? 'bg-retro-pink border-retro-pink text-black animate-glow' 
                  : 'bg-transparent border-retro-blue text-retro-blue hover:bg-retro-blue hover:text-black'
                }
              `}
            >
              <span className="mr-2">{filter.emoji}</span>
              {filter.label}
            </button>
          ))}
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-pixel text-retro-green">1970s</div>
            <div className="text-xs text-gray-400">ZAČÁTKY</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-pixel text-retro-blue">8-BIT</div>
            <div className="text-xs text-gray-400">ÉERA</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-pixel text-retro-purple">PIXEL</div>
            <div className="text-xs text-gray-400">ART</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-pixel text-retro-orange">∞</div>
            <div className="text-xs text-gray-400">ZÁBAVA</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;