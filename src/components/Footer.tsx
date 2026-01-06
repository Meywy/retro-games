import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative mt-16 border-t border-retro-purple">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 20px,
                rgba(255,0,127,0.3) 20px,
                rgba(255,0,127,0.3) 22px
              )
            `
          }}
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo */}
          <div>
            <h3 className="text-xl font-pixel text-retro-pink mb-3 text-neon">
              RETRO HRY
            </h3>
            <p className="text-gray-400 text-sm">
              Vzpomínky na zlatý věk videoher.
              Objevte klasiky, které inspirovaly celé generace hráčů.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-pixel text-retro-blue mb-3">RETRO KATEGORIE</h4>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>👾 Arkádové klasiky</li>
              <li>🏃 Plošinovky</li>
              <li>⚡ Akční hry</li>
              <li>🧩 Puzzle hry</li>
              <li>⚔️ RPG legendy</li>
            </ul>
          </div>
          
          {/* Info */}
          <div>
            <h4 className="font-pixel text-retro-green mb-3">RETRO FAKTA</h4>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>📺 80s & 90s nostalgie</li>
              <li>🎨 Pixel art masterpieces</li>
              <li>🎵 Chiptune soundtracks</li>
              <li>🏆 Herní historie</li>
              <li>💾 8-bit vzpomínky</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-retro-purple/30 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Retro Hry. Vytvořeno s láskou k herní historii.
            <span className="text-retro-pink ml-2">Made with 💖 & pixels</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;