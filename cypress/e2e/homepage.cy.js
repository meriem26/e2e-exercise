import sitesDetails from "../fixtures/siteDetails"

describe('BBC World Service page', () => {
    sitesDetails.forEach((site) => {
        it(`should have the correct title for "${site.service}" website`, () => {
            cy.checkPageTitle(site.address, site.title)
        })
    })
})