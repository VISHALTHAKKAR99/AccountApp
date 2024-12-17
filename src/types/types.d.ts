// Declaring a type for user credentials
export type User = {
  username?: string;
  email: string;
  password: string;
};

// Declaring a type for form submission values
export type LoginFormValues = {
  email: string;
  password: string;
};

export type RegisterFormValues =  {
  username: string;
  email: string;
  password: string;
};;

// Declaring a type for the authentication service
export type AuthContextType = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};
