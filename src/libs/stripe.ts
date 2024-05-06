import Stripe from 'stripe'

export default async function handler(req: any, res: any) {
  if (req.method.toLocaleLowerCase() !== 'get') {
    return res.status(405).end()
  }
  const stripeApiKey = process.env.STRIPE_API_KEY;
  if (!stripeApiKey) {
    throw new Error('Stripe API key is undefined.');
  }
  const stripe = new Stripe(stripeApiKey, {
    apiVersion: '2024-04-10', // StripeのAPIバージョンを指定
    maxNetworkRetries: 3 // ネットワークエラーでStripe API呼び出しが失敗した時のリトライ回数を指定
  })
  const products = await stripe.products.list()
  res.status(200).json(products)
}
