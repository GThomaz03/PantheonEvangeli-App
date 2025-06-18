// src/context/CharacterContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

// Tipos auxiliares
interface Atributos {
  Agilidade: number;
  Força: number;
  Vigor: number;
  Presença: number;
  Intelecto: number;
}

interface Character {
  nome: string;
  vida: number;
  vidaMax: number;
  sanidade: number;
  sanidadeMax: number;
  foco: number;
  focoMax: number;
  atributos: Atributos;
}

interface CharacterContextType {
  character: Character | null;
  setCharacter: (character: Character) => void;
}

export const CharacterContext = createContext<CharacterContextType>({
  character: null,
  setCharacter: () => {},
});

interface Props {
  children: ReactNode;
}

export const CharacterProvider = ({ children }: Props) => {
  const [character, setCharacter] = useState<Character | null>({
    nome: 'Akiryu',
    vida: 36,
    vidaMax: 36,
    sanidade: 36,
    sanidadeMax: 36,
    foco: 27,
    focoMax: 27,
    atributos: {
      Agilidade: 2,
      Força: 1,
      Vigor: 0,
      Presença: 1,
      Intelecto: 3,
    },
  });

  return (
    <CharacterContext.Provider value={{ character, setCharacter }}>
      {children}
    </CharacterContext.Provider>
  );
};
