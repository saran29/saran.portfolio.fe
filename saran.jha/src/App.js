import './App.css';
import Head from './header/head';
import Banner from './body/banner';
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function App() {
    useEffect(() => {
        AOS.init({
          easing: "ease-out-cubic",
          once: true,
          offset: 50,
        });
      }, []);
    
return (
  <>
  <Head />
  <Banner />
</>
);
}

export default App;
