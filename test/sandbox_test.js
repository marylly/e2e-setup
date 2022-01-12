const { I } = inject();

Feature('Basic test');

Scenario('test some forms', () => {
  // I.amOnPage('https://checkout.dev.naturabanking.com/c91d00cb-3fc8-4699-9ca8-76e0713fd7a3');

  I.amOnPage('https://financial-services-apigw.dev.naturabanking.com/payment-journey/checkout/link/c91d00cb-3fc8-4699-9ca8-76e0713fd7a3');
  I.wait(20);
  I.saveScreenshot('frontpageScreenshot.png');
  I.see('Hello');
});
