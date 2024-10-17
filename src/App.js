import { useEffect, useState } from "react";
import { FaCircleChevronRight } from "react-icons/fa6";
import { FaCircleChevronLeft } from "react-icons/fa6";
import data from "./data";

function App() {

  const [articles, setArticles] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < 0) {
      setIndex(articles.length - 1);
    }
    if (index > articles.length - 1) {
      setIndex(0);
    }
  }, [index, articles]);


  useEffect(() => {
    const sliderTimer = setTimeout(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearTimeout(sliderTimer);
  }, [index]);

  return (
    <section>
      <h3 className="section-title">مقالات سایت</h3>
      <div className="slider-container">
        {
          articles.map((article, articleIndex) => {
            const { image, title, description } = article;
            let position = "next-slide";
            if (articleIndex === index) {
              position = "active-slide";
            }
            if (articleIndex === index - 1 || index === 0 && articleIndex === articles.length - 1) {
              position = "last-slide";
            }
            return (
              <article key={articleIndex} className={position}>
                <img src={image} alt={title} />
                <h4>{title}</h4>
                <h5>{description}</h5>
              </article>
            );
          })
        }
        <button className="right-btn btn" onClick={() => setIndex(index + 1)} ><FaCircleChevronRight /></button>
        <button className="left-btn btn" onClick={() => setIndex(index - 1)}><FaCircleChevronLeft /></button>
      </div>
    </section>
  );
}

export default App;