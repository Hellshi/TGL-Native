export interface RootState {
  Auth: {
    isAuth: boolean;
    user: {
      name: string;
      email: string;
      is_admin: boolean;
      picture: {
        created_at: string;
        file: string;
        id: number;
        name: string;
        subtype: string;
        type: string;
        updated_at: string;
        url: string;
        user_id: number;
      };
  }
}

cart: {buyedGames: []}
}

export interface Game {
  id: number;
  game_type: string;
  description: string;
  range: number;
  price: number;
  max_number: number;
  color: string;
  min_cart_value: number;
}

export interface CartItem {
  type: string;
  price: number;
  color: string;
  numbers: (number | string)[];
}

export interface RecentGames {
  id: number;
  choosen_numbers: string;
  user_id: number;
  game_id: number;
  price: number;
  created_at: string;
  type: {
    id: number;
    game_type: string;
    description: string;
    range: number;
    price: number;
    max_number: number;
    color: string;
    min_cart_value: number;
  };
}

export interface data {
  id: number;
  email: string;
  is_admin: boolean;
  name: string;
  token: string;
}

export interface values {
  email: string,
  name: string,
  password: string,
  conformPassword: string,
  oldPassword: string,
}
