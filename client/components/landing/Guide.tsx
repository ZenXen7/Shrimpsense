import Image from 'next/image'
import React from 'react'
import { Radial } from '../shadCharts/Radial'
import { ShrimpHarvest } from '../shadCharts/ShrimpHarvest'

const Guide = () => {
  return (
    <section className="flexCenter flex-col mb-10">
      <div className="mt-20 padding-container max-container w-full pb-24">
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px] text-blue-900">Farm <i>Smarter</i>, not harder</h2>
          <p className="regular-18 text-gray-30 xl:max-w-[520px]">
            With our AI-powered shrimp farming system, you’ll never have to worry about water quality, disease, or shrimp health again. Our predictive analytics ensure optimal conditions with real-time monitoring and automated adjustments, even offline. Maximize efficiency, sustainability, and productivity with data-driven insights. Join the future of shrimp farming and experience smarter, more efficient aquaculture today.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row max-container w-full gap-10 items-center">
        <div className="w-full md:w-[70%] lg:w-[55%] xl:w-[70%]">
          <Image
            src="/img-farm.jpg"
            alt="farm"
            width={1440}
            height={800}
            quality={100}
            className="w-full h-auto object-cover object-center rounded-5xl shadow-md"
          />
        </div>

        <div className="w-full lg:w-[35%] flex flex-col gap-5 items-center">
          <div className="w-full flex-1">
            <Radial />
          </div>
          <div className="w-full flex-1">
            <ShrimpHarvest />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide
