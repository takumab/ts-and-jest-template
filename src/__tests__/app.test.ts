import App from "../app";

describe('Template setup test', () => {
    it('should test something', () => {
        let app = new App();
        const actual = app.sayHello("Takuma");
        expect(actual).toBe("Hi Takuma");
    });
});