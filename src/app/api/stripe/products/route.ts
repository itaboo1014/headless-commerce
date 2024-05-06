import Stripe from 'stripe';

export async function GET() {
  const stripe = new Stripe(process.env.STRIPE_API_KEY || '', {
    apiVersion: process.env.STRIPE_API_VERSION as '2024-04-10' | undefined,
    maxNetworkRetries: 3,
  });
  const products = await stripe.products.list();
  return Response.json({ products });
}
