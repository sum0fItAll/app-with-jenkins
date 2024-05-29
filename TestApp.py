import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options

class MyAppTestCase(unittest.TestCase):
    def setUp(self):
        options = Options()
        options.headless = True
        options.add_argument('--no-sandbox')  # Bypass OS security model, REQUIRED on environments like TravisCI
        options.add_argument('--disable-gpu')  # Applicable to Windows OS only
        options.add_argument('start-maximized')
        options.add_argument('disable-infobars')
        options.add_argument('--disable-extensions')
        self.driver = webdriver.Chrome(options=options)

    def test_homepage_loads(self):
        self.driver.get("http://34.204.0.129:3000")
        self.assertIn("React App", self.driver.title)

    def test_user_data_displayed(self):
        self.driver.get("http://34.204.0.129:3000")
        name_element = self.driver.find_element(By.XPATH, '//p[contains(text(), "Name:")]')
        self.assertTrue(name_element.is_displayed())

    def tearDown(self):
        self.driver.quit()

if __name__ == "__main__":
    unittest.main()
