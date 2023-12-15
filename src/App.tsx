import React from 'react';
import BasicInfo from './components/BasicInfo';
import Education from './components/Education';
import ProfessionalExperience from './components/ProfessionalExperience';
import Projects from './components/Projects';
import './App.css'; // Assuming you have some global styles

const App: React.FC = () => {
  return (
    <div className="container">
      <header className="App-header">
        {/* You can add a header component or navigation here */}
      </header>
      <main>
        <BasicInfo />
        <Education />
        <ProfessionalExperience />
        <Projects />
      </main>
      <footer>
        {/* You can add a footer component here */}
      </footer>
    </div>
  );
};

export default App;
