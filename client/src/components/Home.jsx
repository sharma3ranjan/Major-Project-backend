import { motion } from 'framer-motion'
import { Delivery, HeroBg } from '../assets/index'
import { heroData } from '../utils/data'

const Home = () => {
    return (
        <motion.div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className="flex flex-col items-start justify-start gap-6">
                <div className="px-4 py-1 flex items-center justify-center gap-2 bg-orange-100 rounded-full">
                    <p className='text-lg font-semibold text-orange-500'>Free Delivery</p>
                    <div className='w-10 h-10 flex items-center justify-center rounded-full bg-primary shadow-md '>
                        <img src={Delivery} alt="Delivery" className='w-full h-full object-contain' />
                    </div>
                </div>

                <p className='text-[40px] text-headingColor md:text-[72px] font-sans font-extrabold leading-tight '>The fastest Delivey in <span className="text-orange-600">Your City</span>
                </p>

                <p className="text-textColor text-lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima velit
                    eaque fugit distinctio est nam voluptatum architecto, porro iusto
                    deserunt recusandae ipsa minus eos sunt, dolores illo repellat facere
                    suscipit!
                </p>
                <motion.button
                    type="button"
                    className="bg-gradient-to-br from-orange-400 to-orange-600 w-full md:w-auto px-4 py-2 rounded-xl text-black text-base  font-semibold hover:shadow-lg transition-all ease-in-out duration-100"
                >
                    Order Now
                </motion.button>
            </div>
            <div className='py-2 flex-1 items-center justify-end relative' >
                <img
                    className='absolute top-0 right-0 md:-right-12 w-full h-420 md:w-auto md:h-650'
                    src={HeroBg}
                    alt="Hero Bg"
                />
                <div className='w-full md:460 ml-0 flex flex-wrap  items-center justify-center gap-4 gap-y-14 z-10'>
                    {heroData.map((data) => {
                        { console.log(data); }
                        <div className='w-32 h-36 md:w-190 p-4 bg-lightOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg' key={data.id}>
                            <img
                                src={data.imageSrc}
                                className='w-12 h-12 md:w-32 md:h-32 md:-mt-16 object-contain'
                                alt="images-Prduct" />

                            <p className='text-sm lg:text-xl font-semibold text-textColor'>
                                {data.name}
                            </p>
                            <p className='text-[12px] text-center md:text-base text-lighttextGray font-semibold capitalize'>{data.decp}
                            </p>
                            <p className='text-sm font-semibold text-headingColor'>
                                <span className='text-xs text-red-600'>$</span>
                                {data.price}
                            </p>
                        </div>
                    })}
                </div>
            </div>

        </motion.div>
    )
}

export default Home