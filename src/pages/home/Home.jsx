import Header from "./Home Component/Header/Header";
import City from "./Home Component/Body/City";
import HotelList from "./Home Component/Body/HotelList";
import Type from "./Home Component/Body/Type";
import EmailForm from "./Home Component/Body/EmailForm";
import Footer from "./Home Component/Body/Footer";
import SearchForm from "./Home Component/Header/SearchForm";

const Home = () => {
  return (
    <div>
      <Header />
      <SearchForm />
      <City />
      <Type />
      <HotelList />
      <EmailForm />
      <Footer />
    </div>
  );
};

export default Home;
