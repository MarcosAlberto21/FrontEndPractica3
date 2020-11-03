import { browser, by, element } from 'protractor';

describe('Registro', () => {
    it('Ingresamos a la pagina de inicio.',async () => {        
        await browser.get('http://localhost:4200');
        browser.sleep(500);
    });
    it('Click para ir a la vista de registro.',async () => {        
        element(by.id('registro')).click();
        browser.sleep(2000);
    });
    it('Ingresamos los datos.',async () => { 
        const random = Math.floor(Math.random() * (10000 - 200)) + 200;
        element(by.name('username')).sendKeys('user-'+random);
        element(by.name('contrasenia')).sendKeys('user-'+random);
        element(by.name('correo')).sendKeys('user-'+random+'@gmail.com');
        element(by.name('nombre')).sendKeys('nombre'+random);
        element(by.name('apellido')).sendKeys('apellido'+random);
        element(by.name('dpi')).sendKeys('777744442'+random);
        element(by.name('edad')).sendKeys('35');
        browser.sleep(1000);
    });
    it('Damos enviar.',async () => {        
        element(by.id('actualizar')).click();
        browser.sleep(5000);
    });

});