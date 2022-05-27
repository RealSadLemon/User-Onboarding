describe("User App", ()=>{
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    const nameInput = () => cy.get("input[name=first_name]");
    const lastNameInput = () => cy.get("input[name=last_name]");
    const emailInput = () => cy.get("input[name=email]");
    const passInput = () => cy.get("input[name=pass]");
    const tosBox = () => cy.get("input[name=tos]");
    const submitButt = () => cy.get('button[id="submit"]');
    

    it('Contains the name I provided', () => {
        nameInput()
            .should("have.value", "")
            .type("Esmodea")
            .should("have.value", "Esmodea");
        lastNameInput()
            .type("Burk")
            .should("have.value", "Burk");
        emailInput()
            .should("have.value", "")
            .type("esmodearburk@gmail.com")
            .should("have.value", "esmodearburk@gmail.com");
        passInput()
            .should("have.value", "")
            .type("randompassidk1234")
            .should("have.value", "randompassidk1234");
        tosBox()
            .uncheck().click().check();
        submitButt().click();
    })
    it('Validates form correctly without input', () => {
        nameInput()
            .type('a')
        submitButt().click();
        const newName = () => cy.get('p[id="a"]');
        newName()
            .contains('a');
    })
})