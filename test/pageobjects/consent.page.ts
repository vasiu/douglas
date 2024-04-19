import { $ } from '@wdio/globals'
import BasePage from './base.page';

class ConsentPage extends BasePage {

    private get acceptAllButton () {
        return  $('button[class="button button__primary uc-list-button__accept-all"]');
    }

    public async clickOnAcceptAllButton(){
        await this.acceptAllButton.click();
    }
}

export default new ConsentPage();
