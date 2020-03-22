/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Sunday, 22nd March 2020 9:08 pm                             *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Sunday, 22nd March 2020 9:08 pm                            *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
import 'expect-puppeteer'

jest.setTimeout(60_000);

describe('Bing', () => {
  beforeAll(async () => {
    console.log('before goto', page.isClosed())
    await page.goto('http://bing.com')
    await page.waitFor(2000);
    // await page.setContent(`
    // <html>
    //   <header></header>
    //   <body>Bing</body>
    // </html>
    // `);
    console.log('after goto')
  })

  it('should display "Bing" text on page', async () => {
    console.log('before assert')
    await expect(page).toMatch('Bing')
    console.log('after assert')
  })
})