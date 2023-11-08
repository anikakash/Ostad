import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Project from './components/Project';
import Service from './components/service';

function App() {
 
  const aboutMe = {
    name: "Anik Dash Akash",
    uni : "Daffodil International University",
    dept: "CSE",
    seme: 11,
    age: 23,
  }


  return (
    <div>
      <Header logo={"Anik Akash"}/>
      <Hero des={aboutMe}/>
      <About uni={true} des={aboutMe}/>
      <Service options={false}/>
      <Project pro1={'Python Script'} pro2={"PHP Done"}/>
      <Footer/>
    </div>
  )
}

export default App
