import { useState } from "react";
import './home.css';

function Accordion() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  const accordionData = [
    {
      title: "What about us?",
      content: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    },
    {
      title: "How does Netflix work?",
      content: "Netflix allows you to stream TV shows and movies on your favorite devices. You can watch on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from basic to premium, and you can cancel anytime.",
    },
    {
      title: "What can I watch on Netflix?",
      content: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      title: "Is Netflix good for kids?",
      content: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
    },
  ];

  return (
    <div className="accordion-box">
      {accordionData.map((item, index) => (
        <div key={index} className="cordion-box">
          <div className="top-acc">
            <p>{item.title}</p>
            <div
              style={{
                transform: activeAccordion === index ? "rotate(180deg)" : "rotate(0deg)",
              }}
              className="accord-icon"
              onClick={() => toggleAccordion(index)}
            >
              <img
                src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='36'%20width='30'%20viewBox='0%200%20320%20512'%3e%3cpath%20fill='%23ffffff'%20d='M137.4%20374.6c12.5%2012.5%2032.8%2012.5%2045.3%200l128-128c9.2-9.2%2011.9-22.9%206.9-34.9s-16.6-19.8-29.6-19.8L32%20192c-12.9%200-24.6%207.8-29.6%2019.8s-2.2%2025.7%206.9%2034.9l128%20128z'/%3e%3c/svg%3e"
                alt="Accordion Icon"
              />
            </div>
          </div>
          {activeAccordion === index && (
            <div className="dropped">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;