import Intro from "./components/intro";
import About from "./components/about";
import Access from "./components/access";
import Footer from "./components/footer";

import { GlobalStyle } from './styles/global'

export default function App() {
  return (
    <div>
      <Intro />
      <About />
      <Access />
      <Footer />
      <GlobalStyle />
    </div>
  );
}
