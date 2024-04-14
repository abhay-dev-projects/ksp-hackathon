import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { FacebookImage, InstagramImage, LinkedinImage, TwitterImage, WhatsappImage } from '@/public/assetsManager';
import Link from 'next/link';
import Image from 'next/image';

const SharePost = ({ visible, onClose = () => { }, callback = () => { }, postId }) => {
  const router = useRouter();
  const [isCopied, setIsCopied] = useState(false);
  const [shareLink, setShareLink] = useState(`http://localhost:3000/police/social/${postId}`)

  const copyToClipboard = () => {
    setShareLink(`http://localhost:3000/police/social/${postId}`)
    navigator.clipboard.writeText(shareLink);
    setIsCopied(true);

    // Reset the copied state after 2 seconds
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
      setShareLink(`http://localhost:3000/police/social/${postId}`)
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [visible]);

  const socialShareData = [
    {
      id: 1,
      src: FacebookImage,
      href: "https://www.facebook.com/"
    },
    {
      id: 2,
      src: WhatsappImage,
      href: "https://www.whatsapp.com/"
    },
    {
      id: 3,
      src: LinkedinImage,
      href: "https://www.linkedin.com/"
    },
    {
      id: 4,
      src: InstagramImage,
      href: "https://www.instagram.com/"
    },
    {
      id: 5,
      src: TwitterImage,
      href: "https://twitter.com/"
    },
  ]

  if (!visible) return null;
  return (
    <div
      id="background"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={(e) => {
        if (e.target.id == "background") onClose(), callback();
      }}
    >
      <div className=' register-fir-bg flex flex-col gap-[1rem] items-center w-[30rem]  px-[2rem] py-[2rem] register-fir-bg  ' >
        <div className=' relative  flex justify-between h-[3.2rem] w-[100%] px-[.3rem] ' >
          <input type="text" value={shareLink} className=' bg-[#8C8C9A1F] text-[#AEB9E180] rounded-full outline-none  w-[100%] pr-[6.5rem] pl-[1rem]   ' />
          <button onClick={copyToClipboard} className=' active:scale-95 duration-300 bg-[#6C72FF] text-white absolute right-[4px] flex justify-center items-center w-[6rem] h-[100%] rounded-full  ' >{isCopied ? "Copied" : "Copy"}</button>
        </div>
        <div className=' gap-[1.2rem] ' >
          <h2>Share to your favourite apps</h2>
          <div className=' flex justify-center items-center  gap-[1rem] mt-[1rem] ' >
            {socialShareData && socialShareData.map((data, index) => {
              return (


                <Link key={data.href} href={data.href} target='blank' className=''  >


                  <Image
                    src={data.src}
                    width={200}
                    height={200}
                    alt='social'
                    className=' w-[2rem] hover:scale-[1.1] duration-300 '
                  />
                </Link>
              )
            })}
          </div>
        </div>
      </div>


    </div>


  )
}

export default SharePost
