import Image from "next/image";


const Profile = () => {
    return (
        <div className="bg-[#f2f5fa]" style={{height:"calc(100vh - 60px)",overflow:'auto'}}>
            <div className="relative">
                <div>
                    <Image src={`/images/my-bg.jpg`} width={1200} height={960} alt="" className="h-[250px]"></Image>
                </div>

                <div className="absolute top-[40%] left-1/2 -translate-x-1/2 bg-white w-[90%] rounded-[10px] py-8 px-5">
                    <div className="h-full flex flex-col justify-between">
                        <div className="flex items-center space-x-4 ">
                            <div className="w-[80px] h-[80px] border-2 border-[#219d80] rounded-full">
                                <Image src={`/images/avatar.png`} width={80} height={80} alt={""} className="rounded-full"></Image>
                            </div>
                            <div>
                                <p className="text-lg font-bold mb-1">用户2234</p>
                                <p className="bg-white text-[#a7a8a9] text-xs rounded-full px-3">未完善资料</p>
                            </div>
                        </div>

                        <div className="flex space-x-8 mt-6">
                            <div className="flex flex-col items-center ">
                                <span className="text-xl font-bold">0</span>
                                <p className="text-sm text-[#a7a8a9]">我喜欢的</p>
                            </div>

                            <div className="flex flex-col items-center ">
                                <span className="text-xl font-bold">0</span>
                                <p className="text-sm text-[#a7a8a9]">喜欢我的</p>
                            </div>

                            <div className="flex flex-col items-center ">
                                <span className="text-xl font-bold">0</span>
                                <p className="text-sm text-[#a7a8a9]">最近来访</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="mt-20 px-5">
                <div className="bg-white rounded-[10px] p-5">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                            <span><i className="ri-article-line"></i></span>
                            <p>做任务赚积分</p>
                        </div>

                        <span className="flex items-center">
                            <span className="text-xs">查看更多</span>
                            <i className="ri-arrow-right-s-line text-lg font-normal text-[#cacaca]"></i>
                        </span>
                    </div>

                    <div className={`bg-[#f6f7fb] rounded-[10px] px-4 py-4 flex items-center justify-between`}>
                        <div>
                            <p className={`font-bold`}>开启消息通知</p>
                            <p className={`text-[#7b7c81] text-sm`}>+1积分</p>
                        </div>

                        <button className={`bg-[#18997a] text-white text-sm rounded-full px-4 py-1`}>待领取</button>
                    </div>
                </div>
            </div>

            <div className="my-5 px-5">
                <ul className="bg-white rounded-[10px] px-5 text-sm font-bold">
                    <li className="flex items-center justify-between py-3">
                        <div className="flex items-center space-x-2">
                            <span><i className="ri-star-off-line"></i></span>
                            <p>我的唠唠</p>
                        </div>

                        <span>
                            <i className="ri-arrow-right-s-line text-xl font-normal"></i>
                        </span>
                    </li>

                    <li className="flex items-center justify-between py-4">
                        <div className="flex items-center space-x-2">
                            <span><i className="ri-share-line"></i></span>
                            <p>推荐给好友</p>
                        </div>

                        <span>
                            <i className="ri-arrow-right-s-line text-xl font-normal"></i>
                        </span>
                    </li>

                    <li className="flex items-center justify-between py-4">
                        <div className="flex items-center space-x-2">
                            <span><i className="ri-customer-service-line"></i></span>
                            <p>帮助与客服</p>
                        </div>

                        <span>
                            <i className="ri-arrow-right-s-line text-xl font-normal"></i>
                        </span>
                    </li>

                    <li className="flex items-center justify-between py-4">
                        <div className="flex items-center space-x-2">
                            <span><i className="ri-shield-check-line"></i></span>
                            <p>安全中心</p>
                        </div>

                        <span>
                            <i className="ri-arrow-right-s-line text-xl font-normal"></i>
                        </span>
                    </li>

                    <li className="flex items-center justify-between py-4">
                        <div className="flex items-center space-x-2">
                            <span><i className="ri-settings-2-line"></i></span>
                            <p>设置</p>
                        </div>

                        <span>
                            <i className="ri-arrow-right-s-line text-xl font-normal"></i>
                        </span>
                    </li>
                </ul>
                <p className="text-center text-sm text-[#a3a6ab] mt-5">注册号: 44345341</p>
            </div>

        </div>
    );
};

export default Profile