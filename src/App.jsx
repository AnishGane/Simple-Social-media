import { useContext, useState } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostList from "./components/PostList";
import SideBar from "./components/SideBar";
import PostListProvider from "./store/posts-list-store";
import "bootstrap/dist/css/bootstrap.min.css";
import { PostList as PLData } from "./store/posts-list-store";
import ShowMessage from "./components/ShowMessage";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <PostListProvider>
        <div className="appContainer">
          <SideBar
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          ></SideBar>
          <div className="content">
            <Header></Header>
            <PostContent selectedTab={selectedTab} />
            <Footer></Footer>
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

function PostContent({ selectedTab }) {
  const { postList } = useContext(PLData);
  console.log(postList);

  return (
    <>
      {postList.length === 0 && selectedTab === "Home" && (
        <ShowMessage></ShowMessage>
      )}
      {selectedTab === "Home" ? (
        <PostList></PostList>
      ) : (
        <CreatePost></CreatePost>
      )}
    </>
  );
}

export default App;
