import React from 'react';
import { RetroGame } from '../types/Game';

interface GameModalProps {
  game: RetroGame;
  isOpen: boolean;
  onClose: () => void;
}

const GameModal: React.FC<GameModalProps> = ({ game, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-black border-4 border-retro-pink rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-glow">
        {/* Retro grid background */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full" 
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,0,127,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,0,127,0.3) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px'
            }}
          />
        </div>
        
        <div className="relative z-10 p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-pixel text-retro-pink text-neon mb-2">
                {game.name}
              </h2>
              <div className="flex items-center space-x-4 text-sm">
                <span className="text-retro-blue font-pixel">{game.year}</span>
                <span className="text-retro-green font-pixel">{game.platform}</span>
                <span className="bg-retro-purple px-3 py-1 rounded-full text-black font-bold text-xs">
                  {game.category.toUpperCase()}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-retro-pink hover:text-retro-blue font-pixel text-xl border-2 border-retro-pink hover:border-retro-blue px-4 py-2 rounded transition-colors"
            >
              ✕
            </button>
          </div>
          
          {/* Content */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Image */}
            <div className="space-y-4">
              <img 
                src={game.image} 
                alt={game.name}
                className="w-full max-h-64 object-contain bg-black/50 rounded border-2 border-retro-blue"
                onError={(e) => {
                  e.currentTarget.src = '/images/pacman.svg';
                }}
              />
              
              {/* Game info box */}
              <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-retro-green rounded-lg p-4">
                <h3 className="text-retro-green font-bold text-sm mb-2 tracking-wide">HERNÍ INFO</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {game.description}
                </p>
              </div>
            </div>
            
            {/* Details */}
            <div className="space-y-4">
              {/* Why Popular */}
              <div className="bg-gradient-to-br from-purple-900/50 to-black border-2 border-retro-purple rounded-lg p-4">
                <h3 className="text-retro-purple font-bold text-sm mb-3 flex items-center tracking-wide">
                  <span className="mr-2">⭐</span>
                  PROČ SE STALA POPULÁRNÍ
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {game.whyPopular}
                </p>
              </div>
              
              {/* Gameplay */}
              <div className="bg-gradient-to-br from-blue-900/50 to-black border-2 border-retro-blue rounded-lg p-4">
                <h3 className="text-retro-blue font-bold text-sm mb-3 flex items-center tracking-wide">
                  <span className="mr-2">🎮</span>
                  HRATELNOST
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {game.gameplay}
                </p>
              </div>
              
              {/* Retro elements */}
              <div className="bg-gradient-to-br from-pink-900/50 to-black border-2 border-retro-pink rounded-lg p-4">
                <h3 className="text-retro-pink font-bold text-sm mb-3 flex items-center tracking-wide">
                  <span className="mr-2">📺</span>
                  RETRO LEGENDA
                </h3>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-center">
                    <div className="text-retro-green font-bold">{game.year}</div>
                    <div className="text-gray-400">ROK VYDÁNÍ</div>
                  </div>
                  <div className="text-center">
                    <div className="text-retro-orange font-bold">{new Date().getFullYear() - game.year}</div>
                    <div className="text-gray-400">LET STARÉ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameModal;