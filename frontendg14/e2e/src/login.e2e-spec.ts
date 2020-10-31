import { browser, by, element } from 'protractor';

describe('Login App', () => {
    it('Ingresamos a la pagina de inicio.',async () => {        
        await browser.get('http://localhost:4200');
        browser.sleep(500);
    });
    it('Click para ir a la vista de iniciar sesión.',async () => {        
        element(by.id('login')).click();
        browser.sleep(3000);
    });
    it('Ingresamos el username y la contraseña.',async () => {        
        //pruebaCarlota 7777
        element(by.id('inputEmail')).sendKeys('pruebaCarlota');
        element(by.id('inputPassword')).sendKeys('7777');
        browser.sleep(1000);
    });
    it('Damos click en el boton sign in.',async () => {        
        element(by.id('btn_sign_in')).click();
        browser.sleep(5000);
    });

});