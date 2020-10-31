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
        element(by.name('username')).sendKeys('user-2');
        element(by.name('contrasenia')).sendKeys('user-2');
        element(by.name('correo')).sendKeys('user-2@gmail.com');
        element(by.name('nombre')).sendKeys('nombre');
        element(by.name('apellido')).sendKeys('apellido');
        element(by.name('dpi')).sendKeys('777744442');
        element(by.name('edad')).sendKeys('35');
        browser.sleep(1000);
    });
    it('Damos enviar.',async () => {        
        element(by.id('actualizar')).click();
        browser.sleep(5000);
    });

});