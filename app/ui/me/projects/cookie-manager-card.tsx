import React from "react";
import PopupOfExtension from "@/public/cookie-manager/popup.png";
import MyProjectCard from "@/app/ui/me/projects/components/my-project-card";

const url = "Published soon...";
const name = "Cookie Manager Chrome Extension with React";
const description =
    "This is a simple cookie manager chrome extension, allows you to manipulate cookies in your browser. This extension uses indexedDB to store cookies.";
const slug = "cookie-manager";

const CookieManagerCard = () => {
    return (
        <MyProjectCard url={url} name={name} description={description} slug={slug} imagePath={PopupOfExtension} />
    )
        ;
};

export default CookieManagerCard
