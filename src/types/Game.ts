export interface RetroGame {
  id: number;
  name: string;
  year: number;
  platform: string;
  description: string;
  whyPopular: string;
  gameplay: string;
  image: string;
  category: 'action' | 'rpg' | 'puzzle' | 'arcade' | 'platform' | 'racing';
}