import React from 'react';
import PageTitle from '../Components/PageTitle';

const faqData = [
  {
    id: 1,
    question: 'What is React?',
    answer: 'React is a JavaScript library for building user interfaces.',
  },
  {
    id: 2,
    question: 'What is Bootstrap?',
    answer: 'Bootstrap is a popular open-source CSS framework for building responsive and mobile-first websites.',
  },
  {
    id: 3,
    question: 'How to install React Bootstrap?',
    answer: 'You can install React Bootstrap using the npm package manager. Run: npm install react-bootstrap bootstrap',
  },{
    id: 4,
    question: 'How to install React Bootstrap?',
    answer: 'You can install React Bootstrap using the npm package manager. Run: npm install react-bootstrap bootstrap',
  }
  // Add more FAQ items as needed
];

const FAQPage = () => {
  return (
   <>
   

        <PageTitle title="Frequenty Asked Question!"/>
        <div className="container mt-5">
      <h1 className="text-center mb-4">Frequently Asked Questions</h1>
      <div id="accordion">
        {faqData.map((item) => (
                <>
                
                <div className="card" key={item.id}>
            <div className="card-header" id={`heading${item.id}`}>
              <h5 className="mb-0">
                <button
                  className="btn btn-link"
                  data-toggle="collapse"
                  data-target={`#collapse${item.id}`}
                  aria-expanded="true"
                  aria-controls={`collapse${item.id}`}
                >
                  {item.question}
                </button>
              </h5>
            </div>

            <div
              id={`collapse${item.id}`}
              className="collapse"
              aria-labelledby={`heading${item.id}`}
              data-parent="#accordion"
            >
              <div className="card-body">{item.answer}</div>
            </div>
          </div>

          <br/>
                
                
                </>
         
        ))}
      </div>
    </div>
   
   
   
   </>
  );
};

export default FAQPage;
