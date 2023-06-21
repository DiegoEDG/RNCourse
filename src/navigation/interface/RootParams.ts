export type RootStackParamList = {
  Home: undefined;
  Notifications: undefined;
  Profile: undefined;
  Settings: undefined;
  User: UserProps;
};

interface UserProps {
  id: number;
  name: string;
}
