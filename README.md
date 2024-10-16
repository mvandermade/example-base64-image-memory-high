# example-base64-image-memory-high
To demonstrate that the Firefox browser (130.0.x) keeps increasing its tab memory usage when swapping out data:base64 data of an image's src.

# Running the project
Install node first: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
Run `npm dev` and go the the address printed into the console

# Observations
Below are memory measurements (in MB assuming 1000K = 1MB) used by each tab taken with the task manager of browsers on two different platforms.
## 15okt2024 - MacOS 14.7
Firefox 130.0.1
```
00.00h 70 MB
01.00h 120 MB
01.30h 150 MB
```
Chrome (latest)
```
00.00h 40 MB
01.00h 60 MB
01.30h 52 MB
```

## 15okt2024 - Windows 10
Firefox 130.0.2
```
00.00h 47 MB
01.20h 119 MB
01.50h 162 MB
```
Edge (latest)
```
00.00h 45 MB
01.20h 43 MB
01.50h 45 MB
```
