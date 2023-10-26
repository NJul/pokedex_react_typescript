import { Auth } from "firebase/auth";

export {};

//AUTHENTICATION
export interface AuthProps {
  auth: Auth;
  setIsRegistered: (isRegistered: boolean) => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setUser: (user: string) => void;
}

//POKEMON
export interface Ability {
  ability: {
    name: string;
  };
}

export interface PokemonType {
  type: {
    name: string;
  };
}

export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  abilities: string[];
  image: string;
  user: string;
}
export interface PokemonItemProps {
  pokemon: Pokemon;
  flow: string;
}

export interface AvailablePokemonProps {
  initialPokemons: Pokemon[];
  user: string;
}

export interface UserPokemonProps {
  user: string;
}
