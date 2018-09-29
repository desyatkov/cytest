describe('Input', ()=>{
    before(function () {
        cy.visit('https://www.top10sportsbettingsites.co.uk/best-betting-sites');
    });

    it('Title text', ()=>{
        cy.get('[data-ni-auto-type="CrossSiteWidgetComponent"] .widget-content > div').as('cross')
        cy.get('.widget-title > h2')
            .contains("Don't miss these top online casinos:")
        
    });

    it('Count Cross Charts', ()=>{
        cy.wait(1000);

        cy.get('[data-ni-auto-type="CrossSiteWidgetComponent"] tbody')
            .scrollIntoView()
            .should('have.length', 1)
            .should('be.visible')
    });

    it('Count Cross Charts Rows', ()=>{
        cy.wait(1000);
        cy.get('[data-ni-auto-type="CrossSiteWidgetComponent"] tbody tr')
            .should('have.length', 3)
    });

    it('Count Cross Charts Rows', ()=>{
        cy.get('.link-to-chart > a')
            .invoke('removeAttr', 'target')

        cy.get('.link-to-chart > a').as('crossLink')
        cy.get('@crossLink').should('have.attr', 'href').and('include', 'top10bestonlinecasinos')
        cy.get('@crossLink').click();
        cy.wait(2000);

        cy.url().should('include', 'top10bestonlinecasinos');
        cy.title().should('include', 'Best Online Casinos');
        cy.go(-1);
        cy.wait(2000);

        cy.url().should('include', 'top10sportsbettingsites');
    });
});
