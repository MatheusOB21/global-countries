import { CountryList } from './components';
import { Title } from "./components/styles/Title"
import { Container } from "./components/styles/Container"

export default function App() {
  return (
    <div>
      <Title>🌎 Lista de Países </Title>
      <CountryList/>
    </div>
  );
}
