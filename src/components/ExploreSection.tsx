import React from 'react'
import Button from './Button'
import Image from 'next/image'
import UpwardRightArrow from '../../public/icons/UpwardRightArrow'
import ExploreSectionImg from './ExploreSectionImg'

function ExploreSection() {
  return (
    <div>
        <div className='flex flex-col space-y-12 py-24 px-8 xs:px-7 sm:px-10 md:items-center md:py-44'>
            <div className='text-primary-blue font-semibold tracking-wide text-4xl leading-12 xs:w-[450px] xs:leading-11 sm:leading-10 sm:w-[570px] md:text-center md:leading-14 md:text-5xl md:w-xl lg:leading-20 lg:tracking-wider lg:text-[64px] lg:w-[800px] xl:text-6xl xl:w-3xl'>
                Your end-to-end partner
                for commercial and
                workplace success
            </div>
            <Button
                text='Explore our services'
                variant='primary'
            />
        </div>
        <div className='relative h-full rounded-3xl overflow-hidden text-white pb-20 xs:pb-32 lg:pb-0 lg:h-screen'>
            <div className="absolute inset-0 z-0 bg-[url('/images/explore-section-1.webp')] bg-cover bg-[0%_50%]"></div>
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/50 via-black/80 to-black/40"></div>
            <div className="relative flex flex-col items-center h-full w-full space-y-8 -mt-14 xs:mt-0 xs:space-y-6 md:-mt-4 md:space-y-8 lg:space-y-10 lg:-mt-14 xl:space-y-8 xl:-mt-14 2xl:space-y-8 2xl:mt-10">
                <Image
                    width={200}
                    height={293}
                    src={"/images/explore-section-2.webp"}
                    alt='two-people-conversing'
                    className='hidden z-10 rounded-md absolute lg:block lg:left-16 lg:top-28 xl:top-28 2xl:top-16 2xl:left-28'
                />
                <Image
                    width={200}
                    height={293}
                    src={"/images/explore-section-3.webp"}
                    alt='tall-buildings'
                    className='hidden z-10 rounded-md brightness-85 absolute lg:block lg:-bottom-10 lg:right-16 xl:right-14 xl:-bottom-8 2xl:bottom-12 2xl:right-28'
                />
                <div className='pt-[120px] text-xl font-primary-light tracking-wide'>Building relationships</div>
                <div className='relative z-20 tracking-wider text-center font-semibold text-4xl w-72 xs:w-auto sm:text-4xl sm:w-[500px] sm:leading-12 md:text-5xl md:leading-16 md:w-xl lg:w-[800px] lg:text-6xl lg:leading-20'>
                    Facilitate your property
                    and workplace strategy
                </div>
                <div className='relative z-20 tracking-wide text-center font-semibold font-primary-light text-xl w-80 xs:w-[430px] sm:leading-7 sm:w-lg md:leading-10 md:text-[28px] md:w-[800px] lg:text-3xl'>
                    At NOWW Advisory, we take a pragmatic approach to commercial property negotiations.
                </div>
                <Button
                    text='Explore our services'
                    variant='secondary'
                />
            </div>
        </div>
        <div className='py-24 px-24 flex space-x-10 text-white'>
          <div className='bg-dark-green rounded-3xl overflow-hidden h-[110vh] flex w-2/3'>
            <div className='self-end px-10 flex flex-col space-y-10 pb-10'>
                <UpwardRightArrow/>
                <div className='text-4xl w-[350px] font-semibold tracking-wide'>
                    Expert advice, with
                    end-to-end
                    solutions.
                </div>
                <div className='text-2xl tracking-wide w-80'>
                    Bespoke, tailored, and commercial property negotiation
                </div>
                <div className='text-xl tracking-wide underline cursor-pointer -mt-7'>Learn more about our approach</div>
            </div>
            <div>
                <Image
                    width={291}
                    height={835}
                    src={"/images/explore-section-4.webp"}
                    alt='advice-img'
                    className='rounded-3xl w-full h-full'
                />
            </div>
          </div>  
          <div className='flex flex-col space-y-10 bg-primary-blue pl-10 pr-4 pt-12 pb-14 rounded-3xl w-1/3'>
            <div className='text-3xl w-96 font-semibold tracking-wide'>
                We work along side you
                on all aspects of your
                workplace project to
                ensure a successful
                outcome for your
                business and people.
            </div>
            <div className='text-xl tracking-wide underline cursor-pointer'>Learn more about us</div>
            <ExploreSectionImg/>
          </div>
        </div>
    </div>
  )
}

export default ExploreSection