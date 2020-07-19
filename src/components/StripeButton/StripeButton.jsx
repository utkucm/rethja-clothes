import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51H6brbBMswJ4AhVKNed60Ad3i4x31tpVIoipK3ZWagqrRbLQ6xBJxqTiGNZvJpUrlHTMlGeF1GGMFRBCDrtM0erC00jyTBHt1M';

  const onToken = () => {
    console.log('Payment done');
  };

  return (
    <StripeCheckout
      label='Pay now'
      name='Rethja Clothing'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay now'
      token={onToken}
      publishableKey={publishableKey}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
