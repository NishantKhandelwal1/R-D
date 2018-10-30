var fs = require('fs');
const express = require('express');
let useragent = require('useragent');

const app = express();

app.use(express.static(__dirname + '/build'));

app.get('/invite/:refer_code', (req, res) => {
    
    let get_base_url = getBaseUrlByHeaders(req.headers, req.params.refer_code)
   
    res.redirect(get_base_url);
});

/* final catch-all route to index.html defined last */
app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/build/index.html');
});

const server = app.listen(5000, function () {
    console.log('app is running now')
});

function getBaseUrlByHeaders(headers, refercode) {

    let agent = useragent.lookup(headers['user-agent'])

    if (checkDeviceFamily(agent.device.family)) {

        return all_url.base_url_for_iOS;
    }
    else if (useragent.is(headers['user-agent']).safari || useragent.is(headers['user-agent']).mobile_safari) {
        return all_url.base_url_for_iOS;
    }
    else if (agent.os.family.toLowerCase().includes("mac")) {
        return all_url.base_url_for_iOS;
    }
    else {
        return all_url.base_url_for_android + refercode
    }

}


function checkDeviceFamily(device_family) {

    if (device_family) {
        let isIphone = device_family.toLowerCase().includes("iphone") ? true : false;
        let isApple = device_family.toLowerCase().includes("apple") ? true : false;
        let isIPod = device_family.toLowerCase().includes("ipod") ? true : false;
        let isIPad = device_family.toLowerCase().includes("ipad") ? true : false;
        return (isIphone || isIPod || isIPad || isApple)
    }
    else {

        return false;
    }


}


let all_url = {

    base_url_for_android: 'https://play.google.com/store/apps/details?id=com.sharesmile.share&referrer=utm_source%3Dapp%26utm_medium%3Dmsg%26utm_term%3Drunning%252Bshoes%252Bcharity%26utm_content%3Dsmc%26utm_campaign%3D',
    base_url_for_iOS: 'https://itunes.apple.com/in/app/impact-fitness-charity/id1143265464?mt=8'
}

