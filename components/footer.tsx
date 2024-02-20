import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-white ml-[119px] mr-[116px]">
      <Image src={`/image/jm_logo.png`} alt="" width="38" height="35" />
      <div className="mx-auto py-10">
        <p className="text-xs text-[#8D8D8D]">
          &copy; 2021 Jimi
        </p>
      </div>
    </footer>
  );
}

export default Footer;