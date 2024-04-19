import { browser } from '@wdio/globals'

export default class BasePage {

    public async open(path: string) {
        return await browser.url(`https://www.douglas.de/${path}`)
    }

    public async waitWithoutCondition() {
        await browser.pause(3000);
    }
}
