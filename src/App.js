import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MenuContainer from './components/ManuContainer';
import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';

function App() {
  return (
    <div className="App">
      {/* Header Section  */}
      <Header></Header>

      {/* Main Body  */}
      <main>
        <div className="mainContainer"></div>
        <div className="rightMenu"></div>
      </main>

      {/* Bottom menu  */}
      <div className="bottomMenu">
        <ul id="menu">
          <MenuContainer link={"#"} icon={<HomeRounded></HomeRounded>}></MenuContainer>
          <MenuContainer link={"#"} icon={<Chat></Chat>}></MenuContainer>
          <MenuContainer link={"#"} icon={<AccountBalanceWalletRounded></AccountBalanceWalletRounded>}></MenuContainer>
          <MenuContainer link={"#"} icon={<Favorite></Favorite>}></MenuContainer>
          <MenuContainer link={"#"} icon={<SummarizeRounded></SummarizeRounded>}></MenuContainer>
          <MenuContainer link={"#"} icon={<Settings></Settings>}></MenuContainer>
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default App;
