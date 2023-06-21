import React,{useState,useEffect} from "react";
import axios from "axios";
import './App.css';

function App() {
  const [profileName,setProfileName]=useState("Nurseda Türkcan");
  const [profileCell,setProfileCell]=useState("+555-623-463");
  const [profileImage,setProfileImage]=useState("https://i4.hurimg.com/i/hurriyet/75/0x0/5efd77ed45d2a04ed8f62a14.jpg");
  const [profileEmail,setProfileEmail]=useState("nursedaturkcan123@gmail.com");
  const profileData=async ()=>{
    try {
      const res = await axios.get("https://randomuser.me/api");
      console.log(res);
      setProfileCell(res.data.results[0].cell);
      setProfileEmail(res.data.results[0].email);
      setProfileImage(res.data.results[0].picture.large);
      setProfileName(`${res.data.results[0].name.first} ${res.data.results[0].name.last}`)
    } catch (error) {
      console.log("error");
    }
  }
  return (
    <div className="App">
      <div className="profileContainer">
        <img src={profileImage} />
        <h1> {profileName}</h1>
        <p> {profileEmail}</p>
        <p>{profileCell}</p>
      <button onClick={profileData} > Click for new profile</button>
      </div>
      
    </div>
  );
}

export default App;
