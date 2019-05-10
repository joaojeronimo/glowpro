#!/usr/bin/env node
const puppeteer = require('puppeteer')

const args = process.argv.slice(2)
const query = encodeURI(['site:stackoverflow.com', ...args].join(' '))

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(`https://google.com/search?q=${query}`)
  await page.click('#search h3')
  await page.waitForNavigation()
  const firstAnswerSnippet = await page.$eval('#answers pre', el => el.innerText)
  console.log(firstAnswerSnippet)
  await browser.close()
})()
