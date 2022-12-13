import EastIcon from '@mui/icons-material/East';
import { IfeatureCard } from '../../interface/interface';

const FeaturedProductsCard = ({
    reverse
}: IfeatureCard) => {
  return (
    <>
      <div className={`${reverse || ""} w-full py-16 border-solid border-t-[0.5px] border-[#333333] flex flex-row gap-9`} >
        <div className="w-1/2 h-[305px]">
          <img
            src="https://picsum.photos/300/200"
            alt="featured product"
            className="w-full h-full"
          />
        </div>
        <div className="w-1/2 justify-between flex flex-col h-[305px]">
            <h3 className="text-[40px] font-bold leading-10">
                The Boolean Egyptian. 
            </h3>
            <p className="text-2xl font-normal leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur
            </p>
            <div className="flex flex-row gap-x-16 justify-between items-center">
                <div className="">
                    <img src="" alt="" />
                    <span>64 major creators</span>
                </div>
                <div className="rounded-[88px] border-solid border-[0.5px] border-[#333333]">
                    <EastIcon  
                    fontSize="large"
                    sx={{
                        padding: "8px"
                    }}
                    />
                </div>
            </div>

        </div>
      </div>
    </>
  );
};

export default FeaturedProductsCard;
