## Build Docker Image

```
docker build -t puppeteer-jmeter:test -f ./Dockerfile.jmeter .
```

## Run Docker Container

```
docker run -d -p 5601:8080 --rm --name puppeteer-jmeter --shm-size=2g -v //c/opt/jmeter/chrome/share:/tmp/jmeter/ --cpus="1" --memory="2g" puppeteer-jmeter:test
```

## Run Jmeter Test

```
/opt/apache-jmeter-5.4.3/bin/jmeter -n -t "/tmp/jmeter/puppeteer.jmx" -Jchrome.driver.path="/opt/chromedrivers/ln/101/chromedriver" -Jbase.path="/tmp/jmeter" -l "/tmp/jmeter/reports/result.jtl" -e -o "/tmp/jmeter/reports"


/opt/apache-jmeter-5.4.3/bin/jmeter -n -t "/tmp/jmeter/github.jmx" -Jchrome.driver.path="/opt/chromedrivers/ln/101/chromedriver" -Jbase.path="/tmp/jmeter" -l "/tmp/jmeter/reports/result.jtl" -e -o "/tmp/jmeter/reports"


C:/opt/utils/apache-jmeter-5.4.3/bin/jmeter -n -t "C:/opt/jmeter/chrome/share/github.jmx" -Jchrome.driver.path="C:/opt/jmeter/chromedriver.exe" -Jbase.path="C:\opt\jmeter\chrome\share" -l "C:\opt\jmeter\chrome\share/reports/result.jtl" -e -o "C:\opt\jmeter\chrome\share/reports"
```
