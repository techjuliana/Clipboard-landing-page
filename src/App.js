import {Intro} from "./components/intro";
import {About} from "./components/about";
import {Access} from "./components/access";
import {Footer} from "./components/footer";
import {Workflow} from "./components/workflow";
import {Down} from "./components/down";

export default function App() {
  return (
    <div>
      <Intro />
      <About />
      <Access />
      <Workflow/>
      <Down />
      <Footer/>
    </div>
  );
}
