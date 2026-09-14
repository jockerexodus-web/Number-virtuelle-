import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { item } = req.body;
  if (!item || !item.id) {
    return res.status(400).json({ error: 'Item manquant' });
  }

  try {
    const origin = req.headers.origin || `https://${req.headers.host}`;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'eur',
          product_data: {
            name: `Numéro virtuel ${item.country} ${item.flag}`,
            description: item.description,
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${origin}/?success=1&country=${encodeURIComponent(item.country)}`,
      cancel_url: `${origin}/?cancel=1`,
    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
          }
