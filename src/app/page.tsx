'use client'

import Tilt from 'react-parallax-tilt'

import Image from 'next/image'

import { QRCodeSVG } from 'qrcode.react'

const Home: React.FC = () => {
  return (
    <div className="m-auto max-w-[327px]">
      <div className="flex flex-col gap-5 text-center">
        <h1 className="text-[20px] font-medium leading-6 tracking-[-0.02em]">
          Cartão de embarque
        </h1>

        <Tilt>
          <div className="flex flex-col">
            {/* Flight Info */}
            <div className="dot-top flex flex-1 flex-col gap-6 rounded-t-3xl px-8  py-6 text-black max-sm:rounded-b-3xl max-sm:bg-white">
              <div className="flex w-full flex-col">
                <div className="flex justify-between text-[14px] font-normal opacity-60">
                  <p>Voo</p>
                  <p>Data</p>
                </div>
                <div className="flex justify-between text-[16px] font-medium leading-[19px] tracking-[-0.02em] opacity-90">
                  <p>RS995</p>
                  <p>23/05/2023</p>
                </div>
              </div>

              <div className="flex w-full flex-col gap-2">
                <div className="flex justify-between text-[14px] font-normal opacity-60">
                  <p>São Paulo, Brasil</p>
                  <p>São Francisco, EUA</p>
                </div>

                <div className="flex justify-between text-[40px] font-medium leading-[19px] tracking-[-0.02em] opacity-90">
                  <h1>GRU</h1>
                  <Image
                    src="/ion_airplane.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                  <h1>SFO</h1>
                </div>
                <div className="flex justify-between text-[16px] font-medium leading-[19px] tracking-[-0.02em] opacity-90">
                  <p>17:00</p>
                  <div className="flex">
                    <p>04:48</p>
                    <span className="-translate-y-1 text-[10px]">+1</span>
                  </div>
                </div>
              </div>
            </div>

            <hr className="mx-auto flex w-[85%] justify-between border border-dashed border-black/30 bg-white sm:w-[92%]" />

            <div className="dot-middle flex flex-1 flex-col gap-6  px-8 py-6 text-black max-sm:rounded-3xl max-sm:bg-white sm:border-0">
              <div className="flex w-full flex-col">
                <div className="flex justify-between text-[14px] font-normal opacity-60">
                  <p>Passageiro</p>
                  <p>Assento</p>
                </div>
                <div className="flex justify-between text-[16px] font-medium leading-[19px] tracking-[-0.02em] opacity-90">
                  <p>OsFlash</p>
                  <p>28A</p>
                </div>
              </div>
            </div>

            <hr className="mx-auto flex w-[85%] justify-between border border-dashed border-black/30 bg-white sm:w-[92%]" />

            <div className="dot-bottom flex flex-1 flex-col gap-6 rounded-b-3xl px-8 py-6 text-black max-sm:rounded-t-3xl max-sm:bg-white">
              <div className="flex w-full justify-between">
                <div className="flex flex-col gap-4 text-left">
                  <div>
                    <p className="text-[14px] font-normal opacity-60">
                      Embarque
                    </p>
                    <p className="rounded-lg bg-[#633BBC] px-1 py-2 text-center text-[16px] font-medium leading-[19px] tracking-[-0.02em] text-white opacity-90">
                      16:15
                    </p>
                  </div>

                  <div>
                    <p className="text-[14px] font-normal opacity-60">
                      Terminal
                    </p>
                    <p className="text-[16px] font-medium leading-[19px] tracking-[-0.02em] opacity-90">
                      2
                    </p>
                  </div>

                  <div>
                    <p className="text-[14px] font-normal opacity-60">Portão</p>
                    <p className="text-[16px] font-medium leading-[19px] tracking-[-0.02em] opacity-90">
                      15
                    </p>
                  </div>
                </div>

                <div>
                  <QRCodeSVG
                    value="https://github.com/osflash"
                    className="m-[10px]"
                  />
                  <p className="text-[14px] font-normal opacity-60">
                    Grupo de embarque: 3
                  </p>
                </div>
              </div>

              <p className="text-[16px] leading-[20px] opacity-80">
                <strong>Atenção:</strong> o portão fecha 16:45
              </p>
            </div>
          </div>
        </Tilt>

        <h1 className="text-white/64 text-[14px] font-normal leading-6 tracking-[-0.02em]">
          Qualquer problema procure o balcão de atendimento da sua companhia
          aérea
        </h1>
      </div>
    </div>
  )
}

export default Home
