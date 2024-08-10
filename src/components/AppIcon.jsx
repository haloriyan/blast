import React from "react";

const AppIcon = ({size = 12, textSize = "xl", rounded = "lg"}) => {
    return (
        <div className={`h-${size} aspect-square rounded-lg mobile:rounded-full bg-primary-dark flex items-center justify-center font-black text-green-700 text-${textSize}`}>
            Bs
        </div>
    )
}

export default AppIcon