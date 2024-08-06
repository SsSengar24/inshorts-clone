import { useEffect, useState } from 'react';
import './App.css';
import NavInshorts from './components/NavInshorts'
import axios from 'axios';
import { apiKey } from './data/config';
import NewsContent from './components/NewsContent/NewsContent';


function App() {

  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();

  const newsApi = async () => {
    try {
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`);
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);

    } catch (error) {
      console.log(error);
    }
  }

  console.log(newsArray);
  console.log(newsResults);

  useEffect(() => {
    newsApi();
  }, [newsResults, category])

  return (
    <div className="App">
      <NavInshorts setCategory={setCategory} />
      <NewsContent />
    </div>
  );
}

export default App;
