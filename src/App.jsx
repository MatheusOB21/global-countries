import { CountryList } from './components';
import { Title } from "./components/styles/Title"

export default function App() {
  return (
    <div>
      <Title>🌎 Lista de Países </Title>
      <CountryList />
    </div>
  );
}
