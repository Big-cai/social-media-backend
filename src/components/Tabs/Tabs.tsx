"use client";
import React, { useState } from "react";

interface Tab {
    label: string; // Tab 名称
    content: React.ReactNode; // Tab 内容
}

interface TabsProps {
    tabs: Tab[]; // Tabs 数据
    className?: string; // 外部传入的容器样式
    fixed?: boolean; // 是否固定在页面顶部
}

const Tabs: React.FC<TabsProps> = ({ tabs, className = "", fixed = false }) => {
    const [activeTab, setActiveTab] = useState(0); // 当前激活的 Tab 索引

    return (
        <div  className={`contents ${fixed ? "fixed top-0 z-10 bg-white" : ""} ${
                className
            }`}>
            {/* Tab 按钮 */}
            <div className="flex items-center justify-between bg-[#f2f5fa]">
                <div>
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={`px-5 h-[60px] text-sm bg-[] ${
                                activeTab === index
                                    ? "text-lg font-bold text-black"
                                    : "text-gray-500 text-lg font-bold hover:text-blue-500"
                            }`}
                            onClick={() => setActiveTab(index)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <i className="ri-notification-4-line pr-5"></i>
            </div>

            {/* Tab 内容 */}
            <div className="">
                {tabs[activeTab]?.content}
            </div>
        </div>
    );
};

export default Tabs;
