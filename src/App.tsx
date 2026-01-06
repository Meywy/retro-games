import React, { useState } from 'react';
import { retroGames } from './data/games';
import Header from './components/Header';
import GameCard from './components/GameCard';
import GameModal from './components/GameModal';
import Footer from './components/Footer';
import { RetroGame } from './types/Game';

const App: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<RetroGame | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filteredGames = filter === 'all' 
    ? retroGames 
    : retroGames.filter(game => game.category === filter);

  const handleGameClick = (game: RetroGame) => {
    setSelectedGame(game);
  };

  const handleCloseModal = () => {
    setSelectedGame(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated stars background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        <Header currentFilter={filter} onFilterChange={setFilter} />
        
        <main className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-pixel text-retro-blue mb-2">
              {filter === 'all' ? 'VŠECHNY RETRO HRY' : `KATEGORIE: ${filter.toUpperCase()}`}
            </h2>
            <p className="text-gray-400">
              Nalezeno {filteredGames.length} her{filteredGames.length === 1 ? 'a' : filteredGames.length < 5 ? 'y' : ''}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGames.map(game => (
              <GameCard
                key={game.id}
                game={game}
                onClick={() => handleGameClick(game)}
              />
            ))}
          </div>
          
          {filteredGames.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">👾</div>
              <h3 className="text-xl font-pixel text-retro-pink mb-2">ŽÁDNÉ HRY NENALEZENY</h3>
              <p className="text-gray-400">Zkuste jiný filtr nebo se vraťte k všem hrám.</p>
            </div>
          )}
        </main>
        
        <Footer />
        
        <GameModal
          game={selectedGame!}
          isOpen={!!selectedGame}
          onClose={handleCloseModal}
        />
      </div>
    </div>
  );
};

export default App;