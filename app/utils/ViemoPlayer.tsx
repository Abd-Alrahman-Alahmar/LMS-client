import axios from 'axios';
import React, { FC, useEffect, useState } from 'react'

type Props = {
    videoUrl: string;
    title: string;
}

const ViemoPlayer: FC<Props> = ({ videoUrl }) => {

    useEffect(() => {
                axios.get(`https://lms-server-ten.vercel.app/api/v1/getVdoCipherOTP?videoId=${videoUrl}`,)},
                    
             [videoUrl]);
   

    return (
        <div style={{position:"relative", paddingTop: "56.25%",overflow: "hidden"}}>
                        <iframe 
                        src={`https://player.vimeo.com/video/${videoUrl}`} 
                        style={{
                            border: 0,
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            left: 0,
                        }}
                        allowFullScreen={true}
                        allow="encrypted-media"
                    ></iframe>
        </div>
    )
}

export default ViemoPlayer