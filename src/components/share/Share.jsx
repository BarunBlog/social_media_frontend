import { useContext, useRef, useState } from "react";
import "./share.css"
import { PermMedia, Label, Room, EmojiEmotions, Cancel } from "@mui/icons-material";
import {AuthContext} from "../../context/AuthContext"
import axios from "axios";

export default function Share({ onSharePost }) {

    const [file, setFile] = useState(null)

    const {user} = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const desc = useRef()

    const isFormDataEmpty = (formData) => {
        return formData.has("desc") || formData.has("img");
    };
      


    const submitHandler = async (e) => {
        e.preventDefault()
        const data = new FormData();

        data.append("userId", user._id);

        if (desc.current.value){
            data.append("desc", desc.current.value);
        }

        if(file) {
            data.append("img", file);
        }

        try{
            if (!isFormDataEmpty(data)){
                alert('Please at least give image or description to create a post')
            } else {
                const res = await axios.post("/posts", data)

                onSharePost(res.data)
                desc.current.value = null
                setFile(null)
            }
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src={ user.profilePicture ? user.profilePicture : PF+"/person/sample_profile.jpg"} alt="" className="shareProfileImg" />
                    <input
                        placeholder={`What's in your mind, ${user.username}?`}
                        className="shareInput"
                        ref={desc}
                    />

                </div>

                <hr className="shareHr" />
                {
                    file && (
                        <div className="shareImgContainer">
                            <img src={URL.createObjectURL(file)} alt="" className="shareImg" />
                            <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
                        </div>
                    )
                }
                <form className="shareBottom" onSubmit={submitHandler}>
                    <div className="shareOptions">

                        <label htmlFor="file" className="shareOption">
                            <PermMedia htmlColor="green" className="shareIcon" />
                            <span className="shareOptionText">Photo or Video</span>
                            <input
                                style={{display: "none"}}
                                type="file"
                                id="file"
                                accept=".png, .jpeg. jpg"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </label>

                        <div className="shareOption">
                            <Label htmlColor="gray" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>

                        <div className="shareOption">
                            <Room htmlColor="red" className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>

                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>

                    <button className="shareButton" type="submit">Share</button>
                </form>
            </div>
        </div>
    );
}