// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { listMyNPMPackages } from '../../lib/npmjs'

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const r = await listMyNPMPackages()
  console.log(Object)

  res.status(200).json([])
}
