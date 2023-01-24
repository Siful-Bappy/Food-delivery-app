import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import MenuContainer from "./components/ManuContainer";
import {
  AccountBalanceWalletRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";
import { useEffect } from "react";
import BannerName from "./components/BannerName";
import SubMenuConainer from "./components/SubMenuConainer";
import MenuCard from "./components/MenuCard";
import {MenuItems, Items} from "./components/Data"
import ItemCard from "./components/ItemCard";
function App() {
  useEffect(() => {
    const menuli = document.querySelectorAll("#menu li");
    function setMenuActive() {
      menuli.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    menuli.forEach((n) => n.addEventListener("click", setMenuActive));

    // menu card active toggle
    const rowContainer = document.querySelectorAll(".rowContainer .rowMenuCard")
    rowContainer.forEach(row => row.addEventListener("click", setActiveRow));
    function setActiveRow() {
      rowContainer.forEach(row => row.classList.remove("active"));
      this.classList.add("active");
    }
  }, []);


  return (
    <div className="App">
      {/* Header Section  */}
      <Header></Header>

      {/* Main Body  */}
      <main>
        <div className="mainContainer">
          {/* Banner */}
          <div className="banner">
            <BannerName name={"Bappy"} discount={"20%"} link={"#"}></BannerName>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337"
              alt=""
              className="deliveryPic"
            />
          </div>
          {/* Dish Container */}
          <div className="dishContainer">
            <div className="menuCard">
              <SubMenuConainer name={"Menu Catagroy"}></SubMenuConainer>
            </div>
            <div className="rowContainer">
              {
                MenuItems.map(data => (<MenuCard 
                  key={data.id}
                  imgSrc={data.imgSrc}
                  name={data.name}
                  isActive = {data.id === 1 ? true : false}
                ></MenuCard>))
              }
              
            </div>
            <div className="dishItemContainer">
              {
                Items.map(item => (<ItemCard
                  key={item.id}
                  imgSrc={item.imgSrc}
                  name={item.name} 
                  ratings={item.ratings} 
                  price={item.price}></ItemCard>))
              }
            </div>
          </div>
        </div>
        <div className="rightMenu"></div>
      </main>

      {/* Bottom menu  */}
      <div className="bottomMenu">
        <ul id="menu">
          <MenuContainer
            link={"#"}
            icon={<HomeRounded></HomeRounded> }
            isHome
          ></MenuContainer>
          <MenuContainer link={"#"} icon={<Chat></Chat>}></MenuContainer>
          <MenuContainer
            link={"#"}
            icon={<AccountBalanceWalletRounded></AccountBalanceWalletRounded>}
          ></MenuContainer>
          <MenuContainer
            link={"#"}
            icon={<Favorite></Favorite>}
          ></MenuContainer>
          <MenuContainer
            link={"#"}
            icon={<SummarizeRounded></SummarizeRounded>}
          ></MenuContainer>
          <MenuContainer
            link={"#"}
            icon={<Settings></Settings>}
          ></MenuContainer>
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default App;
