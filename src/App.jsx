import './App.css';
import Header from './components/Header/Header';
import LeftSide from './components/LeftSide/LeftSide';
import RightSide from './components/RightSide/RightSide';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';



export function App() {
  return (
    <>
      <Header />
      <div id="wrapper">
        <LeftSide />
        <RightSide />
        <Content />
      </div>
      <Footer />
    </>
  );
}