import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="w-[100%] flex justify-center items-center">
      <div className=" w-[70%]">
        <Image src={`/image/jm_logo.png`} alt="" width="38" height="35" />
        <div className="mx-auto py-10">
          <p className="text-xs text-[#8D8D8D]">
            &copy; 2021 Jimi
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;