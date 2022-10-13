import {
  IconInstagram,
  IconTwitter,
  IconTelegram,
  IconDiscord,
  IconLogo,
} from '../../common/icons';

function Footer() {
  const col1 = [
    { text: 'Explore', url: '#', alt: 'Explore' },
    { text: 'How it Works', url: '#', alt: 'How it Works' },
    { text: 'Contact Us', url: '#', alt: 'Contact Us' },
  ];
  const col2 = [
    { text: 'Help center', url: '#', alt: 'Help center' },
    { text: 'Terms of service', url: '#', alt: 'Terms of service' },
    { text: 'Legal', url: '#', alt: 'Legal' },
    { text: 'Privacy policy', url: '#', alt: 'Privacy policy' },
  ];

  return (
    <div className="py-4 sm:pt-10 sm:pb-6">
      <div className="container mx-auto grid gap-y-5">
        <div className="h-[1px] border-solid bg-[#E3E1E3] border-1"></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-4  mx-2">
          <nav>
            <IconLogo classname="mb-4" />

            <span className="font-bold">Get the lastes Updates</span>
          </nav>
          <nav>
            <h3 className="text-lg font-semibold mb-4">CryptoKet</h3>
            <ul className="grid gap-y-3">
              {col1.map((item, index) => {
                return (
                  <li>
                    <a
                      className="hover:font-bold"
                      href={item.url}
                      alt={item.alt}
                    >
                      {item.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <nav>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="grid gap-y-3">
              {col2.map((item, index) => {
                return (
                  <li>
                    <a
                      className="hover:font-bold"
                      href={item.url}
                      alt={item.alt}
                    >
                      {item.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="h-[1px] border-solid bg-[#E3E1E3] border-1"></div>
        <div className="flex justify-between flex-col items-center gap-y-3 sm:gap-y-0 sm:flex-row font-semibold pt-1 sm:pt-3  mx-2">
          <div className="flex gap-x-4 text-gray-700">
            <div>
              <span className="hover:font-bold">
                CrpytoKet, Inc. All Rights Reserved
              </span>
            </div>
          </div>
          <nav className="flex gap-x-2 items-center">
            <a
              href="https://www.instagram.com"
              className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-700"
            >
              <IconInstagram />
            </a>
            <a
              href="https://www.twitter.com"
              className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-700"
            >
              <IconTwitter />
            </a>
            <a
              href="https://www.telegram.com"
              className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-700"
            >
              <IconTelegram />
            </a>
            <a
              href="https://www.discord.com"
              className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-700"
            >
              <IconDiscord />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Footer;
