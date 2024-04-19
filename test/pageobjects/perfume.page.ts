import { $ } from '@wdio/globals';
// import {WebdriverIO.Element} from 'webdriverio'
import BasePage from './base.page';

class PerfumePage extends BasePage {

    private get prduktartDropdown() {
        return $('//div[text()="Produktart"]');
    }

    private get markeDropdown() {
        return $('//div[text()="Marke"]');
    }

    private get highlightsDropdown() {
        return $('//div[text()="Highlights"]');
    }

    private get furWenDropdown() {
        return $('div[data-testId="gender"]');
    }

    private get geschenkFurDropdown() {
        return $('div[data-testId="Geschenk für"]');
    }

    private get productTypesearchInputField() {
        return $('input[placeholder="Produktart suchen"]');
    }

    private get markeSearchInputField() {
        return $('input[placeholder="Marke suchen"]');
    }

    private get geschenkFurInputField() {
        return $('input[placeholder="Geschenk für suchen"]');
    }

    private get applyFiltersButton() {
        return $('//button[contains(text(), "Produkte anzeigen")]')
    }

    private get resetFiltersButton() {
        return $('button[class="selected-facets__reset"]');
    }

    private get productsSearchResultList(): Promise<WebdriverIO.ElementArray> {

        return $$('//div[@id="productlisting"]/div/div/div/div/div/div/a/div[3]');
    }

    private async getDropdownEntrybyValue(value: string) {
        return $(`//div[@class="facet-option__checkbox--rating-stars"]//div[text()="${value}"]`);
    }

    private async getFurWenDropdownEntrybyValue(value: string) {
        return $(`//div[@class="facet-option__checkbox--rating-stars"]//div[text()="${value}"]`);
    }

    private async getHighlightsDropdownEntrybyValue(value: string) {
        return $(`//div[@class="facet-option__checkbox--rating-stars"]//div[text()="${value}"]`);
    }

    public async eneterProductType(value: string) {
        (await this.productTypesearchInputField).setValue(value);
    }

    public async eneterMarke(value: string) {
        (await this.markeSearchInputField).setValue(value);
    }

    public async enterGeschenkFur(value: string) {
        (await this.geschenkFurInputField).setValue(value);
    }

    public async clickOnProducktartDropdown() {
        (await this.prduktartDropdown).click();
    }

    public async clickOnMarkeDropdown() {
        (await this.markeDropdown).click();
    }

    public async clickOnHighlightsDropdown() {
        (await this.highlightsDropdown).click();
    }

    public async clickOnFurWenDropdown() {
        (await this.furWenDropdown).click();
    }

    public async clickOnGeschenkFurDropdown() {
        (await this.geschenkFurDropdown).click();
    }

    public async selectProductType(value: string) {
        (await this.getDropdownEntrybyValue(value)).click();
    }

    public async selectMarke(value: string) {
        (await this.getDropdownEntrybyValue(value)).click();
    }

    public async selectHighlights(value: string) {
        (await this.getHighlightsDropdownEntrybyValue(value)).click();
    }

    public async selectFurWen(value: string) {
        (await this.getFurWenDropdownEntrybyValue(value)).click();
    }

    public async selectGeschenkFur(value: string) {
        (await this.getDropdownEntrybyValue(value)).click();
    }

    public async clickOnApplyFiltersButton() {
        (await this.applyFiltersButton).click();
    }

    public async clickOnResetFiltersButton() {
        (await this.resetFiltersButton).click();
    }

    public async getSearchResults() {
        const resultListOfElements: WebdriverIO.ElementArray = await this.productsSearchResultList;

        resultListOfElements.forEach(async element => {
            const topBrand: WebdriverIO.Element = await element.$('./div/div/div[@class="text top-brand"]');
            const brandLine: WebdriverIO.Element = await element.$('./div/div/div[@class="text brand-line"]');
            console.log(await topBrand.getText() + " - " + await brandLine.getText());
        });
    }

    public async open() {
        return await super.open('de/c/parfum/01');
    }
}

export default new PerfumePage();

