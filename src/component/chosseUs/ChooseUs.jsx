import React, { useState } from 'react';
import { FaRegLightbulb } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { BsEmojiSmile } from "react-icons/bs";

const ChooseUs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabContent = [
        {
            icon: <FaRegLightbulb className="text-2xl"/>, 
            title: "Knowledge",
            content: "Our company owner, project managers and carpenters have decades of experience working in the construction defect repair industry giving them the ability to find a solution for each and every client’s unique concerns.",
        },
        {
            icon: <FiMessageCircle className="text-2xl"/>, 
            title: "Communication",
            content: "We remain engaged throughout the entire process with incredible attention to detail. Our goal is to complete your project ahead of schedule and under budget. Check out our testimonials and see for yourself!",
        },
        {
            icon: <BsEmojiSmile className="text-2xl"/>, 
            title: "Satisfaction",
            content: "We take pride in maintaining a reputation of being friendly, accommodating and transparent with our clients. We continually rise above expectations ensuring all needs are met and client satisfaction is achieved.",
        },
    ];

    return (
        <div className="bg-[#292B37] pb-[50px] font-worksans">
            <div className="flex flex-col gap-6 py-20 items-center">
                <h2 className="text-4xl font-normal text-white">WHY CHOOSE US?</h2>
                <div className="w-full max-w-xs h-[1px] bg-white"></div>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 justify-center mb-6">
                {tabContent.map((tab, index) => (
                    <button
                        key={index}
                        className={`py-2 px-4 flex items-center text-lg font-semibold focus:outline-none transition-colors duration-300  ${
                            activeTab === index
                                ? "bg-[#FFAA06] text-white"
                                : "text-white bg-[#404353] hover:text-[black]"
                        }`}
                        onClick={() => setActiveTab(index)}
                        aria-selected={activeTab === index}
                    >
                        <div className="mr-2">{tab.icon}</div>
                        {tab.title}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="mt-4 p-4 flex justify-center flex-col items-center">
                <div className="md:w-[1062px] text-center text-white transition-opacity duration-500 opacity-0" 
                     style={{ opacity: activeTab === null ? 0 : 1 }}>
                    <p className="transition-opacity duration-500">{tabContent[activeTab].content}</p>
                </div>
                <div className="pt-[40px]">
                    <button className="px-4 py-2 bg-[#FFAA06] text-white hover:bg-yellow-600">
                        LET'S WORK TOGETHER
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;
