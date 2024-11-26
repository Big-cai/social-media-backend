import Tabs from "../components/Tabs/Tabs";

const Content1 = () => {
        const dataList = [
            {
                "user": {
                    "gender":"0",
                    "avatar":"/images/avatar.png",
                    "name": "嘻嘻哈哈",
                    "year": "95年",
                    "location": "北京",
                    "degree": "硕士",
                    "field": "教育/科研"
                },
                "description": "新人报道，多多关照！个人背景：95年白羊座。本科大气科学，算是小众，毕业后央企工作，京户，几年后辞职考研，美国呆了半年，今年北大毕业入职另一家央企，新能源行业。\n 经历与规划：热爱自然，义无反顾选...查看全文",
                "images": [
                    {
                        "src": "/images/p1.jpg",
                    },
                    {
                        "src": "/images/p2.jpg",
                    },
                    {
                        "src": "/images/p3.jpg",
                    },
                    {
                        "src": "/images/p4.jpg",
                    }
                ],
                "postTime": "21小时前",
                "stats": {
                    "shares": 82,
                    "likes": 424
                }
            },
            {
                "user": {
                    "gender":"1",
                    "avatar":"/images/avatar.png",
                    "name": "拉风金额",
                    "year": "95年",
                    "location": "上海",
                    "degree": "硕士",
                    "field": "教育/科研"
                },
                "description": "新人报道，多多关照！个人背景：95年白羊座。本科大气科学，算是小众，毕业后央企工作，京户，几年后辞职考研，美国呆了半年，今年北大毕业入职另一家央企，新能源行业。\n 经历与规划：热爱自然，义无反顾选...查看全文",
                "images": [
                    {
                        "src": "/images/p1.jpg",
                    },
                    {
                        "src": "/images/p2.jpg",
                    },
                    {
                        "src": "/images/p3.jpg",
                    },
                    {
                        "src": "/images/p4.jpg",
                    }
                ],
                "postTime": "21小时前",
                "stats": {
                    "shares": 82,
                    "likes": 424
                }
            }
        ]

    return(
        <div className={`h-[calc(100vh-120px)] overflow-auto px-5`}>
            <div className="overflow-x-auto flex items-center py-4 scrollbar-hide">
                <div className="flex flex-nowrap px-2">
                    <div
                        className={`flex flex-col items-start justify-between p-4 rounded-lg w-[130px] h-[80px] bg-[#e2c19d] text-white shadow-lg`}
                    >
                        {/* 标题 */}
                        <div>
                            <p className="text-sm font-bold">我的说明书</p>
                            <p className="text-xs opacity-80">manual</p>
                        </div>

                    </div>
                </div>
                <div className="flex flex-nowrap px-2">
                    <div
                        className={`flex flex-col items-start justify-between p-4 rounded-lg w-[130px] h-[80px] bg-[#9badfd] text-white shadow-lg`}
                    >
                        {/* 标题 */}
                        <div>
                            <p className="text-sm font-bold">我的说明书</p>
                            <p className="text-xs opacity-80">manual</p>
                        </div>

                    </div>
                </div>
                <div className="flex flex-nowrap px-2">
                    <div
                        className={`flex flex-col items-start justify-between p-4 rounded-lg w-[130px] h-[80px] bg-[#ff88c0] text-white shadow-lg`}
                    >
                        {/* 标题 */}
                        <div>
                            <p className="text-sm font-bold">我的说明书</p>
                            <p className="text-xs opacity-80">manual</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="mt-10">
                {dataList.map((item, index) => {
                    return (
                        <div className="bg-white  mb-6 flex items-start gap-x-4" key={index}>
                            <div className="flex-shrink-0">
                                <img src={item.user.avatar} alt="" className="w-[40px] h-[40px] rounded-full"/>
                            </div>
                            <div>
                                <div className="flex flex-col mb-4">
                                <div className="flex items-center">
                                        <h2 className="text-xl font-semibold mr-2">{item.user.name}</h2>
                                        <span>
                                            {
                                                item.user.gender === "1" ?
                                                    <i className="ri-men-line text-[#56a8f5]"></i> :
                                                    <i className="ri-women-line text-[#e095b1]"></i>
                                            }
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-gray-600">{item.user.year} · {item.user.location}</span>
                                        <span
                                            className="text-gray-600 ml-2">{item.user.degree} · {item.user.field}</span>
                                    </div>
                                </div>
                                <p className="text-gray-700 mb-4 whitespace-pre-line">{item.description}</p>
                                <div className="grid grid-cols-3 gap-2 mb-4 rounded-lg overflow-hidden">
                                    {item.images.map((image, index) => (
                                        <img key={index} src={image.src} className=""
                                             alt={`Image ${index + 1}`}/>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">{item.postTime}</span>
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    <div className="mr-4 text-gray-600 flex items-center gap-x-1">
                                        <i className="ri-share-box-line"></i>
                                        <span>{item.stats.shares}</span>
                                    </div>
                                    <div className="mr-4 text-gray-600 flex items-center gap-x-1">
                                        <i className="ri-chat-2-line text-lg"></i>
                                        <span>{item.stats.shares}</span>
                                    </div>

                                    <div className="mr-4 text-gray-600 flex items-center gap-x-1">
                                        <i className="ri-heart-3-line"></i>
                                        <span>{item.stats.likes}</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const Content2 = () => {
    return (
        <div className="h-[calc(100vh-120px)] overflow-auto px-5">

            <div className="h-full flex justify-center items-center">
                <div className="flex flex-col items-center">
                    <img src="/images/CharcoDirections.png" alt=""/>
                    <button className="bg-[#179a7b] text-white px-10 py-2 rounded-full">逛一逛</button>
                </div>
            </div>
        </div>
    )
}

export default function Home() {
    const tab = [{label: '热门', content: <Content1/>}, {label: '关注', content: <Content2/>}]
    return (
        <div className="">
            <main className="">
            <Tabs tabs={tab} fixed={true}/>
            </main>
        </div>
    );
}
