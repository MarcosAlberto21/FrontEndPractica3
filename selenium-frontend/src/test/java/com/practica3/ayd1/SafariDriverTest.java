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

import static org.junit.Assert.assertTrue;

public class SafariDriverTest {

    private String testUrl;
    private WebDriver driver;

    @Before
    public void prepare() {
        // setup chromedriver
        System.setProperty(
                "webdriver.safari.driver",
                "webdriver/safaridriver");

        testUrl = "http://localhost:3000/explorer";

        // Create a new instance of the Chrome driver
        // Notice that the remainder of the code relies on the interface,
        // not the implementation.
        driver = new SafariDriver();

        // Alternatively the same thing can be done like this
        // driver.navigate().to(testUrl);
        driver.get(testUrl);
    }

    @Test
    public void testTitle() throws IOException {

        // Find elements by attribute lang="READ_MORE_BTN"
        List<WebElement> elements = driver
                .findElements(By.cssSelector("[lang=\"READ_MORE_BTN\"]"));

        // Click the selected button
        // elements.get(0).click();


        assertTrue("The page title should be chagned as expected",
                (new WebDriverWait(driver, 5))
                        .until(new ExpectedCondition<Boolean>() {
                            public Boolean apply(WebDriver d) {
                                return d.getTitle().equals("LoopBack API Explorer");
                            }
                        })
        );

    }

    @After
    public void teardown() throws IOException {
        driver.quit();
    }

}
