import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="w-[100%] flex justify-center items-center bg-[#f2f2f2]">
      <div className=" w-[70%]">
        <Image src={`/image/jm_logo.png`} alt="" width="38" height="35" />
        <div className='flex flex-row justify-between '>
          <div className="py-10 flex flex-row gap-3 ">
            <p className="text-[16px] text-[#8D8D8D]">
              &copy; 2021 JiMei
            </p>
            <p className="text-[16px] text-[#8D8D8D]">
              Terms
            </p>
            <p className="text-[16px] text-[#8D8D8D]">
              Privacy
            </p>
          </div>
          <div className="py-10 flex flex-row gap-5">
            <p className="text-[16px] text-[#8D8D8D]">
              业务产品
            </p>
            <p className="text-[16px] text-[#8D8D8D]">
              服务支持
            </p>
            <p className="text-[16px] text-[#8D8D8D]">
              工作地点
            </p>
            <p className="text-[16px] text-[#8D8D8D]">
              资源
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;