import Hero from "../components/Hero";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <div className="text-white">
      <Hero />
      <Row rowID='1' title="Now Playing" fetchURL={requests.requestNowPlaying} />
      <Row rowID='2' title="Up Coming" fetchURL={requests.requestUpcoming} />
      <Row rowID='3' title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID='4' title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowID='5' title="Trending" fetchURL={requests.requestTrending} />
    </div>
  );
};

export default Home;
