import {FOOTER} from '../../constants/header'
import MarkunreadIcon from '@mui/icons-material/Markunread';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Footer = () => {
  return (
    <footer className="w-full m-auto flex flex-col relative bottom-0 items-center gap-6 py-6">
        <div className="flex flex-row items-center gap-[119px] w-full justify-center">
            <h2 className="text-[#292929] font-extrabold text-3xl not-italic leading-10 tracking-widest ">ARTSY.</h2>
            <ul className="grid grid-cols-2 gap-x-40 gap-y-8">
                {
                FOOTER.map((item: string, index: number) => (
                    <li key={index} className="text-[#292929] font-normal text-xl" >{item}</li>
                ))
            }
            </ul>
            
            <div className="flex flex-col gap-y-12 self-start">
                <MarkunreadIcon />
                <LocationOnOutlinedIcon />
            </div>

        </div>
        <div>
            <p className="text-[#333333] opacity-50">© 2022 Artsystudios. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer