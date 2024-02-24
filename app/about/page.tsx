"use client";
import Container from '@/components/ui/container';
//import { useRouter } from "next/router";
import { useRef } from "react";
import WorkerList from "@/components/worker-list";
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator, Image } from '@chakra-ui/react'

const AboutPage = () => {
    const aboutMenus = ["公司介绍", "团队", "荣誉奖项", "工作流程", "合作伙伴"];
    const companyImages = ["/image/company_1.png", "/image/company_2.png", "/image/company_2.png", "/image/company_1.png", "/image/company_2.png", "/image/company_1.png"];
    //const router = useRouter();
    const refAnchor1 = useRef(null)
    const refAnchor2 = useRef(null)
    const refAnchor3 = useRef(null)
    const refAnchor4 = useRef(null)
    const refAnchor5 = useRef(null)
    /**
     * id: number,
  name: string,
  desc: string,
  mainImage: ImageData,

   url: string,
  alt?: string,
  width: number,
  height: number,
     */
    const workerList = [
        { id: 0, name: "johnny", desc: "fsfdsfds fdsfdsfds", mainImage: { url: "/image/event2.png", alt: "", width: 250, height: 200 } },
        { id: 1, name: "Eric", desc: "nvcmxnvcx", mainImage: { url: "/image/event2.png", alt: "", width: 250, height: 200 } },
        { id: 0, name: "aaa", desc: "fsfdsfds fdsfdsfds", mainImage: { url: "/image/event2.png", alt: "", width: 250, height: 200 } },
        { id: 1, name: "bbb", desc: "nvcmxnvcx", mainImage: { url: "/image/event2.png", alt: "", width: 250, height: 200 } },
        { id: 0, name: "cccc", desc: "fsfdsfds fdsfdsfds", mainImage: { url: "/image/event2.png", alt: "", width: 250, height: 200 } },
        { id: 1, name: "dddd", desc: "nvcmxnvcx", mainImage: { url: "/image/event2.png", alt: "", width: 250, height: 200 } },
    ];
    return (
        <div className=' bg-[#F2F2F2]'>
            <div className=' h-[10px]' />
            <Container>
                <p className='absolute text-[40px]'>ABOUT US</p>
                <div className=' h-[20px]' />
                <Tabs size='md' align="center" variant="unstyled" onChange={
                    (index) => {
                        switch (index) {
                            case 0:
                                document.documentElement.scrollTo({
                                    top: refAnchor1.current?.offsetTop,
                                    behavior: "smooth"
                                })
                                break;
                            case 1:
                                document.documentElement.scrollTo({
                                    top: refAnchor2.current?.offsetTop,
                                    behavior: "smooth"
                                })
                                break;
                            case 2:
                                document.documentElement.scrollTo({
                                    top: refAnchor3.current?.offsetTop,
                                    behavior: "smooth"
                                })
                                break;
                            case 3:
                                document.documentElement.scrollTo({
                                    top: refAnchor4.current?.offsetTop,
                                    behavior: "smooth"
                                })
                                break;
                            case 4:
                                document.documentElement.scrollTo({
                                    top: refAnchor5.current?.offsetTop,
                                    behavior: "smooth"
                                })
                                break;
                        }
                    }
                }>
                    <TabList>
                        {aboutMenus.map((tab, index) => (
                            <Tab key={index} ml="20px" mr="20px">{tab}</Tab>
                        ))}
                    </TabList>
                    <TabIndicator
                        position="relative"
                        mt="1.5px"
                        height="1px"
                        bg="#0D0C22"
                        borderRadius="1px"
                    />
                    <p className=' mt-[1.5px] w-full border-b border-dashed bg-[#999999]' />
                    <div className=" h-[80px]" />
                    <TabPanels>
                        <div>
                            <div className=' h-[30px]' />
                            <a ref={refAnchor1}></a>
                            {/* <div style={{ width: "100vw", height: "100vh" }}> */}
                            <div className='h-[180px]'>
                                <p className=' text-left text-[22px]'>{aboutMenus[0]}</p>
                                <p className=' absolute left-0 w-[30%] h-[150px] mt-[20px]'>AA BLACK COVER DESIGN (ABCD) IS AN
                                    INTERNATIONAL BRANDING AGENCY
                                    BASE IN BEIJING & LOS ANGELES.

                                    CONTACT US:
                                    INFO@GDC-TESICE
                                </p>
                                <p className='text-[15px] text-left absolute right-0 w-[67%]'>
                                    G Dlack Cover Design (GDC) is a global branding agency established in 2015 by Guang Yu and Nod Young, based in Beijing & Los Angeles. ABCD developing branding, visual identity, product package, user interface, printed matter and design strategy service to clients and target audiences. The previous work which has shown our design concept is systematic and targeted, it also makes us won the client’s recognition and numerous international and domestic awards.
                                </p>
                                <p className='text-left text-[15px] absolute w-[67%] mt-[100px] right-0'>
                                    G Dlack Cover Design （简称：GDC）2015 年成立于北京，是以品牌视觉设计为核心的国际设计机构。GDC 专注于新品牌与新零售行业，为客户和受众提供建筑设计、空间设计、环艺设计、品牌设计、产品包装，及品牌策略服务。在以往的项目中，
                                </p>
                            </div>
                            <div className=' h-[80px]' />
                            <a ref={refAnchor2}></a>
                            <div>
                                <p className=' text-left  text-[22px]'>{aboutMenus[1]}</p>
                                <div className=' h-[50px]' />
                                <WorkerList workers={workerList} />
                            </div>
                            <div className=' h-[80px]' />
                            <a ref={refAnchor3}></a>
                            <div>
                                <p className=' text-left text-[22px]'>{aboutMenus[2]}</p>
                                <div className='absolute items-center'>
                                    <Image src="/image/awards.png" width={100} height={50} />
                                </div>
                                <div className='text-[15px]'>
                                    <p>2019 HKDA GDA, 1Gold prize /1 sliver /1 Bronze /1Jury Award, Hong Kong,CN</p>
                                    <p>2018 Tokyo Type Directors Club, TDC Prize, Tokyo, JP</p>
                                    <p>2016 Dummy Award Kassel, Annual Photography Book Award, Beijing, CN</p>
                                    <p>2014 La Biennale di Venezia, Design Excellence Award,Venice,IT</p>
                                    <p> 2012 52 Aces Red Dot Award: Communication Design, DE</p>
                                    <p>2011 GO Red! Cannes Lions 2011,Gold Lion,FR</p>
                                    <p>2011 GDC 11,Shenzhen,CN Great Awards,CN</p>
                                    <p>2009 HKDA Design Show, CN,2 sliver Prize /1 Bronze, Hong Kong, CN</p>
                                    <p>2009 D&AD,2Merit Awards,UK</p>
                                    <p>2008 Tokyo Type Directors Club, TDC Prize / Merit Award, Tokyo, JP</p>
                                    <p>2007 86th Art Directors Club Annual Award,1 Merit Award,NY, USA</p>
                                    <p>2007 Tokyo Type Directors Club, 2 Merit Award, Tokyo, JP</p>
                                    <p>2007 GDC 07,3 Silver Prize / Bronze Prize,Shenzhen,CN</p>
                                    <p>2006 HKDA Design Show1 Gold Prize/1 Silver Prize/1 Bronze Prize, CN</p>
                                    <p>2006 85th Art Directors Club Annual Award,Merit Award,NY, USA</p>
                                    <p>2005 GDC 05 Great Awards /1 Silver Prize,Shenzhen,CN</p>
                                    <p>2004 Tokyo Type Directors Club, Non-member Prize / Merit Awards, Tokyo, JP</p>
                                    <p>2004 Ningbo International Poster Biennial,1 Gold prize /2 Merit Awards, CN</p>
                                </div>
                            </div>
                            <div className=' h-[80px]' />
                            <a ref={refAnchor4}></a>
                            <div>
                                <p className=' text-left text-[22px]'>{aboutMenus[3]}</p>
                                <Image src="/image/work_flow.png" width={900} height={450} />
                                <p className=' text-with-line-breaks text-[15px]'>
                                </p>
                            </div>
                            <div className=" h-[80px]" />
                            <a ref={refAnchor5}></a>
                            <div>
                                <p className='text-[22px]'>{aboutMenus[4]}</p>
                                <div className=" h-[30px]" />
                                <div className=' grid grid-cols-4 gap-8'>
                                    {
                                        companyImages.map((item) => (
                                            <div className=' bg-white flex items-center justify-center w-[210px] h-[210px]'>
                                                <img src={item} width={190} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </TabPanels>
                </Tabs>
            </Container>
        </div>
    );
}

export default AboutPage;