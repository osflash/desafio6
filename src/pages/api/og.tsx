/* eslint-disable @next/next/no-img-element */
import { NextRequest } from 'next/server'

import { ImageResponse } from '@vercel/og'
import clsx from 'clsx'
import { z } from 'zod'

export const config = {
  runtime: 'experimental-edge'
}

const roboto = fetch(
  new URL('../../../public/Roboto-Bold.ttf', import.meta.url)
).then(res => res.arrayBuffer())

const logo = new URL('../../../public/favicon.png', import.meta.url).toString()

const paramsSchema = z.object({
  title: z
    .string()
    .optional()
    .default(process.env.NEXT_PUBLIC_TITLE || 'Title Example'),

  width: z
    .string()
    .optional()
    .transform(v => (!isNaN(Number(v)) ? Number(v) : 1200)),
  height: z
    .string()
    .optional()
    .default('630')
    .transform(v => (!isNaN(Number(v)) ? Number(v) : 1200))
})

export default async function handler(req: NextRequest) {
  const [robotoData] = await Promise.all([roboto])

  const { searchParams } = req.nextUrl

  const query = Object.fromEntries(searchParams.entries())

  const { title, width, height } = paramsSchema.parse(query)

  return new ImageResponse(
    (
      <div
        tw={clsx('flex h-full w-full flex-col items-center justify-center')}
        style={{ background: 'linear-gradient(to bottom, #dbf4ff, #fff1f1)' }}
      >
        <img src={logo} alt="Logo" tw="w-20 h-20 mb-4 opacity-95 rounded-lg" />
        <h1
          tw="w-full justify-center text-center  text-[100px] font-bold text-zinc-700"
          style={{ fontFamily: 'Roboto', wordBreak: 'break-all' }}
        >
          {title}
        </h1>
      </div>
    ),
    {
      width,
      height,
      fonts: [{ name: 'Roboto', data: robotoData }]
    }
  )
}
