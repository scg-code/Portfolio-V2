import Socials from './Socials';

const Footer = () => {
  return (
    <footer className='bg-secondary py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-between'>
          {/* socials */}
          <Socials
            containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4'
            iconsStyles='text-black text-[20px] hover:text-white transition-all'
          />
          {/* copyright */}
          <div className='text-muted-foreground'>
            Copyright &copy; Samuel Gifford. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
