import React, { useState } from "react";
import { motion } from "framer-motion";

type IProps = {
    front: JSX.Element;
    back: JSX.Element;
}

const FlipCard = ({ front, back }: IProps) => {
    const [isFlipped, setIsFlipped] = useState<boolean>(false);
    const [isFront, setIsFront] = useState<boolean>(true);

    const flipCard = () => {
        setIsFlipped(!isFlipped);
        setIsFront(isFlipped ?? true)
    };

    return (
        <div onClick={flipCard} style={{ perspective: 1000 }}>
            <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, flip: 1 }}
                style={{ width: 100, height: 100, position: "relative", borderBottom: "2px solid #ccc", borderRadius: 10 }}
                className="cursor-pointer"
            >
                {isFront ? <motion.div
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 10,
                    }}
                >
                    {front}
                </motion.div>
                    :
                    <motion.div
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            rotateY: 180,
                            borderRadius: 10,
                        }}
                        transition={{ duration: -1 }}
                    >
                        {back}
                    </motion.div>}
            </motion.div>
        </div>
    );
};

export default FlipCard;