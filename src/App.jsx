import { Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed.jsx";
import Topbar from "./components/layout/Topbar.jsx";
import SidebarLeft from "./components/layout/SidebarLeft.jsx";
import SidebarRight from "./components/layout/SidebarRight.jsx";
import BottomNav from "./components/layout/BottomNav.jsx";

export default function App() {
  return (
    <div className="app bg-light">
      <Topbar />
      <div className="main-layout">
        <SidebarLeft />
        <main className="feed">
          <Routes>
            <Route path="/" element={<Feed />} />
          </Routes>
        </main>
        <SidebarRight />
      </div>
      <BottomNav />
    </div>
  );
}
