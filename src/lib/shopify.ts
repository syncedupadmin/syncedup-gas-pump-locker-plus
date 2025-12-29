// Shopify Storefront API client
// Demo mode: Uses localStorage cart until Shopify credentials are configured

const SHOPIFY_STORE_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const SHOPIFY_STOREFRONT_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN;

const isShopifyConfigured = SHOPIFY_STORE_DOMAIN && SHOPIFY_STOREFRONT_TOKEN;

interface ShopifyResponse<T> {
  data: T;
  errors?: Array<{ message: string }>;
}

async function shopifyFetch<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  if (!isShopifyConfigured) {
    throw new Error('Shopify not configured');
  }

  const response = await fetch(
    `https://${SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_TOKEN!,
      },
      body: JSON.stringify({ query, variables }),
    }
  );

  const json: ShopifyResponse<T> = await response.json();

  if (json.errors) {
    throw new Error(json.errors.map((e) => e.message).join(', '));
  }

  return json.data;
}

// Create a new cart
export async function createCart(): Promise<{ cartId: string; checkoutUrl: string }> {
  if (!isShopifyConfigured) {
    // Demo mode - return mock data
    return { cartId: 'demo-cart', checkoutUrl: '#' };
  }

  const query = `
    mutation cartCreate {
      cartCreate {
        cart {
          id
          checkoutUrl
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const data = await shopifyFetch<{
    cartCreate: {
      cart: { id: string; checkoutUrl: string };
    };
  }>(query);

  return {
    cartId: data.cartCreate.cart.id,
    checkoutUrl: data.cartCreate.cart.checkoutUrl,
  };
}

// Add item to cart
export async function addToCart(
  cartId: string,
  variantId: string,
  quantity: number = 1
): Promise<{ checkoutUrl: string; totalQuantity: number }> {
  if (!isShopifyConfigured) {
    // Demo mode
    return { checkoutUrl: '#', totalQuantity: quantity };
  }

  const query = `
    mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          id
          checkoutUrl
          totalQuantity
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const data = await shopifyFetch<{
    cartLinesAdd: {
      cart: { id: string; checkoutUrl: string; totalQuantity: number };
    };
  }>(query, {
    cartId,
    lines: [{ merchandiseId: variantId, quantity }],
  });

  return {
    checkoutUrl: data.cartLinesAdd.cart.checkoutUrl,
    totalQuantity: data.cartLinesAdd.cart.totalQuantity,
  };
}

// Update cart line quantity
export async function updateCartLine(
  cartId: string,
  lineId: string,
  quantity: number
): Promise<{ checkoutUrl: string; totalQuantity: number }> {
  if (!isShopifyConfigured) {
    return { checkoutUrl: '#', totalQuantity: quantity };
  }

  const query = `
    mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
      cartLinesUpdate(cartId: $cartId, lines: $lines) {
        cart {
          id
          checkoutUrl
          totalQuantity
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const data = await shopifyFetch<{
    cartLinesUpdate: {
      cart: { id: string; checkoutUrl: string; totalQuantity: number };
    };
  }>(query, {
    cartId,
    lines: [{ id: lineId, quantity }],
  });

  return {
    checkoutUrl: data.cartLinesUpdate.cart.checkoutUrl,
    totalQuantity: data.cartLinesUpdate.cart.totalQuantity,
  };
}

// Remove item from cart
export async function removeFromCart(
  cartId: string,
  lineId: string
): Promise<{ checkoutUrl: string; totalQuantity: number }> {
  if (!isShopifyConfigured) {
    return { checkoutUrl: '#', totalQuantity: 0 };
  }

  const query = `
    mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
        cart {
          id
          checkoutUrl
          totalQuantity
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const data = await shopifyFetch<{
    cartLinesRemove: {
      cart: { id: string; checkoutUrl: string; totalQuantity: number };
    };
  }>(query, {
    cartId,
    lineIds: [lineId],
  });

  return {
    checkoutUrl: data.cartLinesRemove.cart.checkoutUrl,
    totalQuantity: data.cartLinesRemove.cart.totalQuantity,
  };
}

// Get cart details
export async function getCart(cartId: string) {
  if (!isShopifyConfigured) {
    return null;
  }

  const query = `
    query getCart($cartId: ID!) {
      cart(id: $cartId) {
        id
        checkoutUrl
        totalQuantity
        cost {
          totalAmount {
            amount
            currencyCode
          }
        }
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                  product {
                    title
                    featuredImage {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const data = await shopifyFetch<{ cart: unknown }>(query, { cartId });
  return data.cart;
}

export { isShopifyConfigured };
