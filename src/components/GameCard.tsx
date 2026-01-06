import React from 'react';
import { RetroGame } from '../types/Game';

interface GameCardProps {
  game: RetroGame;
  onClick: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onClick }) => {
  const categoryColors = {
    action: 'from-red-500 to-red-700',
    rpg: 'from-purple-500 to-purple-700',
    puzzle: 'from-blue-500 to-blue-700',
    arcade: 'from-yellow-500 to-yellow-700',
    platform: 'from-green-500 to-green-700',
    racing: 'from-orange-500 to-orange-700'
  };

  return (
    <div 
      onClick={onClick}
      className={`
        bg-gradient-to-br ${categoryColors[game.category]} 
        rounded-lg border-2 border-retro-pink 
        hover:border-retro-blue hover:animate-glow
        cursor-pointer transform transition-all duration-300
        hover:scale-105 hover:shadow-2xl
        p-4 relative overflow-hidden
        group
      `}
    >
      {/* Retro grid background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-pixel text-retro-blue text-neon truncate">
            {game.name}
          </h3>
          <span className="text-xs font-pixel text-retro-pink bg-black px-2 py-1 rounded">
            {game.year}
          </span>
        </div>
        
        <div className="mb-3">
          <img 
            src={game.image} 
            alt={game.name}
            className="w-full h-32 object-contain bg-black/50 rounded border border-retro-purple"
            onError={(e) => {
              e.currentTarget.src = '/images/pacman.svg';
            }}
          />
        </div>
        
        <p className="text-sm text-gray-300 mb-3 line-clamp-3">
          {game.description}
        </p>
        
        <div className="flex items-center justify-between text-xs">
          <span className="text-retro-green font-pixel">{game.platform}</span>
          <span className={`
            px-2 py-1 rounded-full text-black font-bold
            ${categoryColors[game.category].replace('from-', 'bg-').replace(' to-red-700', '').replace(' to-purple-700', '').replace(' to-blue-700', '').replace(' to-yellow-700', '').replace(' to-green-700', '').replace(' to-orange-700', '')}
          `}>
            {game.category.toUpperCase()}
          </span>
        </div>
      </div>
      
      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-retro-pink/20 to-retro-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default GameCard;