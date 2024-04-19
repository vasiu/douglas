import { $ } from '@wdio/globals'
import BasePage from './base.page';

class HomePage extends BasePage {

    public get perfumeButton () {
        return $('div[text()="Invitation Sent"]');
    }

    public async clickOnPerfumeButton (){
    }

    public async open () {
        return await super.open('de');
    }
}

export default new HomePage();
