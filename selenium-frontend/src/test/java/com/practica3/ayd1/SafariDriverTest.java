package com.practica3.ayd1;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.safari.SafariDriver;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.TimeUnit;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class SafariDriverTest {

    private String testUrl;
    private WebDriver driver;

    @Before
    public void prepare() {
        // setup SafariWebDriver
        System.setProperty(
                "webdriver.safari.driver",
                "webdriver/safaridriver");

        testUrl = "http://localhost:4200";

        // Create a new instance of the Chrome driver
        // Notice that the remainder of the code relies on the interface,
        // not the implementation.
        driver = new SafariDriver();

        // Alternatively the same thing can be done like this
        // driver.navigate().to(testUrl);
        driver.get(testUrl);
    }

    @Test
    public void testTitle() {
        // Arrange
        List<WebElement> elements = driver
                .findElements(By.cssSelector("[lang=\"READ_MORE_BTN\"]"));
        // Act
        assertTrue("The page title should be chagned as expected",
                (new WebDriverWait(driver, 5))
                        .until(new ExpectedCondition<Boolean>() {
                            public Boolean apply(WebDriver d) {
                                return d.getTitle().equals("Frontendg14");
                            }
                        })
        );
    }

    @Test
    public void testLoginButton() {
        // Arrange
        WebElement element = driver
                .findElement(By.id("btn_login"));
        // Act
        final String loginButtonText = element.getText();
        // Assert
        assertEquals("Iniciar Sesión", loginButtonText);
    }

    @Test
    public void testLoginButtonTakesToLogin() {
        // Arrange
        WebElement element = driver.findElement(By.id("btn_login"));
        // Act
        element.click();
        WebElement newElement = TestHelpers.fluentWait(driver, By.id("title_sign_in"));
        // Assert
        assertEquals("Sign In", newElement.getText());
    }

    @Test
    public void testLoginSendsRequest() {
        // Arrange
        driver.navigate().to("http://localhost:4200/login");
        WebElement emailInput = driver.findElement(By.id("inputEmail"));
        WebElement passwordInput = driver.findElement(By.id("inputPassword"));
        WebElement loginButton = driver.findElement(By.id("btn_sign_in"));
        // Act
        emailInput.sendKeys("test@test.com");
        passwordInput.sendKeys("asdf123");
        loginButton.click();
        TestHelpers.fluentWait(driver, By.id("btn_sign_in"));
        WebElement newEmailInput = driver.findElement(By.id("inputEmail"));
        WebElement newPasswordInput = driver.findElement(By.id("inputPassword"));
        // Assert
        assertEquals("", newEmailInput.getText());
        assertEquals("", newPasswordInput.getText());
    }

    @After
    public void teardown() {
        driver.quit();
    }

}
