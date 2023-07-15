import "./profile.css"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const params = useParams()

    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUserData = async () => {
            const res = await axios.get(`/user/?username=${params.username}`)
            setUser(res.data)
        }

        fetchUserData()
    }, [params.username])

    return (
        <>
            <Topbar />

            <div className="profile">
                <Sidebar />

                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src={user.coverPicture || PF+"/person/sample_cover.jpeg"} alt="" className="profileCoverImg" />
                            <img src={user.profilePicture || PF+"/person/sample_profile.jpg"} alt="" className="profileUserImg" />
                        </div>

                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <span className="profileInfoDesc">{user.desc}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed
                            isTimeLine={true}
                            username={params.username}
                        />
                        <Rightbar
                            isProfile={true}
                            userData={user}
                        />
                    </div>
                </div>

                
            </div>
        </>
    )
}