/* eslint-disable @next/next/no-img-element */
import { NextRequest } from 'next/server'

import { ImageResponse } from '@vercel/og'
import clsx from 'clsx'
import { z } from 'zod'

export const config = {
  runtime: 'experimental-edge'
}

const logo = new URL('../../../public/favicon.png', import.meta.url).toString()

const paramsSchema = z.object({
  width: z
    .string()
    .optional()
    .transform(v => (!isNaN(Number(v)) ? Number(v) : 1200)),
  height: z
    .string()
    .optional()
    .transform(v => (!isNaN(Number(v)) ? Number(v) : 1200)),
  tw: z.string().optional()
})

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl

  const query = Object.fromEntries(searchParams.entries())

  const { width, height, tw } = paramsSchema.parse(query)

  return new ImageResponse(
    (
      <div tw={clsx('flex w-screen h-screen bg-transparent', tw)}>
        <img
          src={logo}
          alt="Logo"
          tw={clsx('w-screen h-screen bg-transparent', tw)}
        />
      </div>
    ),
    { width, height }
  )
}
