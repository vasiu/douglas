
import HomePage from '../pageobjects/home.page'
import PerfumePage from '../pageobjects/perfume.page'
import ConsentPage from '../pageobjects/consent.page'

describe('Douglas : Search for perfumes using different filters', () => {
    type perfumeFilter = {
        highlights: string;
        marke: string[];
        produktart: string[];
        geschenkFur: string[];
        furWen: string;
    }

    const perfumeFilters: perfumeFilter[] = [
        {
            highlights: "Sale",
            marke: ["CALVIN KLEIN", "Armani"],
            produktart: ["Parfum"],
            geschenkFur: [],
            furWen: "Männlich"
        },
        {
            highlights: "NEU",
            marke: [],
            produktart: ["Eau de Parfum"],
            geschenkFur: [],
            furWen: "Weiblich"
        },
        {
            highlights: "Limitiert",
            marke: ["BURBERRY"],
            produktart: ["Duftset"],
            geschenkFur: ["Vatertag"],
            furWen: "Männlich"
        }
    ];

    before(async () => {
        await HomePage.open();
        await ConsentPage.clickOnAcceptAllButton();
        await PerfumePage.open();
    });

    perfumeFilters.forEach(async (perfumeFilter) => {
         it('should list all perfumes filtered by:' +  JSON.stringify(perfumeFilter), async () => {

            for (const produktart of perfumeFilter.produktart){
                await PerfumePage.clickOnProducktartDropdown();
                await PerfumePage.eneterProductType(produktart);
                await PerfumePage.selectProductType(produktart);
                await PerfumePage.clickOnApplyFiltersButton();
            }

            for (const marke of perfumeFilter.marke){
                await PerfumePage.clickOnMarkeDropdown();
                await PerfumePage.eneterMarke(marke);
                await PerfumePage.selectMarke(marke);
            
                await PerfumePage.clickOnApplyFiltersButton();
            }

            for (const geschenkFur of perfumeFilter.geschenkFur){
                await PerfumePage.clickOnGeschenkFurDropdown();
                await PerfumePage.enterGeschenkFur(geschenkFur);
                await PerfumePage.selectGeschenkFur(geschenkFur);
                await PerfumePage.clickOnApplyFiltersButton();
            }

            await PerfumePage.clickOnHighlightsDropdown();
            await PerfumePage.selectHighlights(perfumeFilter.highlights);
            await PerfumePage.clickOnApplyFiltersButton();

            await PerfumePage.clickOnFurWenDropdown();
            await PerfumePage.selectFurWen(perfumeFilter.furWen);
            await PerfumePage.clickOnApplyFiltersButton();

            await PerfumePage.getSearchResults();

            await PerfumePage.clickOnResetFiltersButton();
        })
    });
})

