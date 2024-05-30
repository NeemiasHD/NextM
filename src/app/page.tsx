import ReactPaginate from "react-paginate";
import Banner from "./components/Banner/Banner";
import Catalogo1 from "./components/Catalogo1/Catalogo1";
import Catalogo2 from "./components/Catalogo2/Catalogo2";
import Navegation from "./components/Navegation/Navegation";
import Paginacao from "./components/pagination/Paginacao";


function page() {
  return (
    <div className="MainWebSite">
      <Banner />
      <Catalogo1 Name={"Populares"}/>
      <Navegation />
      <Catalogo2 />

     
    </div>
  );
}

export default page;
