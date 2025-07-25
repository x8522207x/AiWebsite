document.addEventListener("DOMContentLoaded", () => {
    let lang = localStorage.getItem('lang');
    let page = localStorage.getItem('page');
    if (!lang) {
        lang = 'ch';
        localStorage.setItem('lang', lang);
    }

    if (!page) {
        page = 'index';
        localStorage.setItem('page', page);
    }

    checkBtnClass(lang, page);
    document.querySelector('.chinese').addEventListener('click', () => {
        localStorage.setItem('lang', 'ch');
        lang = 'ch';
        checkBtnClass(lang, page);
    });

    document.querySelector('.english').addEventListener('click', () => {
        localStorage.setItem('lang', 'en');
        lang = 'en';
        checkBtnClass(lang, page);
    });

    document.querySelector('.back_btn').addEventListener('click', () => {
        localStorage.setItem('page', 'index');
    });
});

function modifyChineseElements(page) {
    switch (page) {
        case 'index':
            document.querySelector('.ai_page>a').style.backgroundImage = "url('../img/ai_button.png')";
            document.querySelector('.floor_page>a').style.backgroundImage = "url('../img/floor_button.png')";
            document.querySelector('.transportation_page>a').style.backgroundImage = "url('../img/transportation_button.png')";
            document.querySelector('.store_page>a').style.backgroundImage = "url('../img/store_button.png')";
            document.querySelector('.media_page>a').style.backgroundImage = "url('../img/media_button.png')";
            break;
        case "ai":
            break;
        case "floor":
            break;
        case "transportation":
            document.querySelector('.long_bus_area>.table_container .header1').innerText = "林口轉運站發車";
            document.querySelector('.long_bus_area>.table_container .header2 ').innerText = "檔案館發車";
            document.querySelector('.long_bus_area>.desc').innerText = "週一至週五 7/7起適用，9/2起對外服務試營運，每週六加開接駁班次。";
            document.querySelector('.mrt_area>.table-metro .table-purple>th').innerText = "桃園機場捷運";
            document.querySelector('.mrt_area .a8').innerText = "長庚醫院站 A8";
            document.querySelector('.mrt_area .a8_1').innerHTML = `
            ➤ 轉乘858路線公車，於<strong>林口國宅站（國家檔案館站）</strong>下車。`;
            document.querySelector('.mrt_area .a9').innerText = "林口站 A9";
            document.querySelector('.mrt_area .a9_1').innerHTML = `
            ➤ 轉乘898路線公車，於<strong>林口國宅站（國家檔案館站）</strong>下車。<br /> 
            ➤ 轉乘937或946路線公車，於<strong>夢想之都站</strong>下車，步行8分鐘。<br /> 
            ➤ 轉乘936或945路線公車，於<strong>空間樂園社區站</strong>下車，步行5分鐘。<br /> 
            ➤ 步行5分鐘至文化二路一段郵局站，轉乘920、967路線公車，於<strong>空間樂園社區站</strong>下車，步行5分鐘。`;
            document.querySelector('.mrt_area>.table-metro .table-blue>th').innerText = "臺北捷運";
            document.querySelector('.mrt_area .a10').innerText = "臺北車站";
            document.querySelector('.mrt_area .a10_1').innerHTML = `
            ➤ 轉乘966路線公車，於<strong>運動公園站</strong>下車，步行4分鐘。`;
            document.querySelector('.mrt_area .a11').innerText = "淡水信義線";
            document.querySelector('.mrt_area .a11_1').innerHTML = `
            ➤ 於<strong>圓山站</strong>轉乘936路線公車，於<strong>空間樂園社區站</strong>下車，步行5分鐘。`;
            document.querySelector('.mrt_area .a12').innerText = "中和新蘆線";
            document.querySelector('.mrt_area .a12_1').innerHTML = `
            ➤ 於<strong>蘆洲站</strong>轉乘925路線公車，於<strong>運動公園站</strong>下車，步行4分鐘。<br /> 
            ➤ 於<strong>迴龍站</strong>轉乘898路線公車，於<strong>林口國宅站（國家檔案館站）</strong>下車。`;
            document.querySelector('.mrt_area>.table-metro .table-yellow>th').innerText = "環狀線";
            document.querySelector('.mrt_area .y19').innerText = "幸福站 Y19";
            document.querySelector('.mrt_area .y19_1').innerHTML = `
            ➤ 於<strong>幸福站Y19</strong>轉乘920路線公車，於<strong>空間樂園社區站</strong>下車，步行5分鐘。`;
            document.querySelector('.short_bus_area .name').innerText = "公車站名";
            document.querySelector('.short_bus_area .time').innerText = "步行時間";
            document.querySelector('.short_bus_area .path').innerText = "公車路線";
            document.querySelector('.short_bus_area .name_1').innerHTML = "林口國宅站<br />（國家檔案館站）";
            document.querySelector('.short_bus_area .time_1').innerText = "3分鐘";
            document.querySelector('.short_bus_area .path_1').innerHTML = "822、858、898、5063<br />跳蛙公車（林口府中經忠孝路）";
            document.querySelector('.short_bus_area .name_2').innerText = "運動公園站";
            document.querySelector('.short_bus_area .time_2').innerText = "4分鐘";
            document.querySelector('.short_bus_area .path_2').innerHTML = "822、858、898、925、948、966、967<br />F231、F237、F238<br />跳蛙公車（林口–捷運忠孝敦化）";
            document.querySelector('.short_bus_area .name_3').innerText = "世貿芳鄰站";
            document.querySelector('.short_bus_area .time_3').innerText = "5分鐘";
            document.querySelector('.short_bus_area .path_3').innerText = "786、920、936、945、967";
            document.querySelector('.short_bus_area .name_4').innerHTML = "運動公園 <br />（仁愛路）站";
            document.querySelector('.short_bus_area .time_4').innerText = "6分鐘";
            document.querySelector('.short_bus_area .path_4').innerText = "920、946、967、F237、F238";
            document.querySelector('.short_bus_area .name_5').innerText = "台北新都站";
            document.querySelector('.short_bus_area .time_5').innerText = "7分鐘";
            document.querySelector('.short_bus_area .path_5').innerHTML = "786、920、946、967、5071、5069<br />F235、F239、F250<br />跳蛙公車（林口–捷運忠孝敦化）";
            document.querySelector('.short_bus_area .name_6').innerText = "夢想之都站";
            document.querySelector('.short_bus_area .time_6').innerText = "8分鐘";
            document.querySelector('.short_bus_area .path_6').innerHTML = "854、920、937、946<br />跳蛙公車（林口–圓山）<br />跳蛙公車（林口文化三路–圓山）";
            document.querySelectorAll('.drive_area .direction')[0].innerText = "南下：";
            document.querySelectorAll('.drive_area .direction')[1].innerText = "北上：";
            document.querySelectorAll('.drive_area .path')[0].innerHTML = `
            文化一路一段 <strong>→</strong> 忠孝路 <strong>→</strong> 右轉公園路 <br />
            <strong>→</strong><strong> 國家檔案館（停車場）</strong><br />
            <strong>或直行右轉檔案館路至正門</strong>`;
            document.querySelectorAll('.drive_area .path')[1].innerHTML = `
                <strong>1.</strong>文化二路一段 <strong>→</strong> 右轉檔案館路<br />
                <strong>→</strong> <strong>檔案館路(國家檔案館正門)</strong>，欲前往<br />
                <strong>國家檔案館停車場</strong>請直行<strong>右轉文化一路一段，</strong><br />
                沿園區外圍道路行駛，並自<strong>公園路側</strong>進入。<br />
                <strong>２.</strong>文化三路一段 <strong>→</strong> 右轉 <strong>仁愛一路</strong>直行 <br />
                <strong>→</strong> <strong>檔案館路(國家檔案館正門)</strong>，欲前往<br />
                <strong>國家檔案館停車場</strong>請直行右轉<strong>文化一路一段，</strong><br />
                沿園區外圍道路行駛，並自<strong>公園路側</strong>進入。`;
            break;
        case "store":
            break;
        case "media":
            break;
    }
}

function modifyEnglishElements(page) {
    switch (page) {
        case 'index':
            document.querySelector('.ai_page>a').style.backgroundImage = "url('../img/ai_button_en.png')";
            document.querySelector('.floor_page>a').style.backgroundImage = "url('../img/floor_button_en.png')";
            document.querySelector('.transportation_page>a').style.backgroundImage = "url('../img/transportation_button_en.png')";
            document.querySelector('.store_page>a').style.backgroundImage = "url('../img/store_button_en.png')";
            document.querySelector('.media_page>a').style.backgroundImage = "url('../img/media_button_en.png')";
            break;
        case "ai":
            break;
        case "floor":
            break;
        case "transportation":
            document.querySelector('.long_bus_area>.table_container .header1').innerText = "To NDC";
            document.querySelector('.long_bus_area>.table_container .header2 ').innerText = "To Linkou Bus Station";
            document.querySelector('.long_bus_area>.desc').innerText = "Starting July 7, weekday service (Monday to Friday) will be in effect. Trial operation for the public will begin on September 2, with additional shuttle runs on Saturdays.";
            document.querySelector('.mrt_area>.table-metro .table-purple>th').innerText = "Taoyuan Airport MRT";
            document.querySelector('.mrt_area .a8').innerText = "Chang Gung Memorial Hospital Station (A8)";
            document.querySelector('.mrt_area .a8_1').innerHTML = "➤ Transfer to Bus 858, get off at <strong>Linkou Public Housing Station (National Archives Bureau Station)</strong>.";
            document.querySelector('.mrt_area .a9').innerText = "Linkou Station (A9)";
            document.querySelector('.mrt_area .a9_1').innerHTML = `
            ➤ Transfer to Bus 898, get off at <strong>Linkou Public Housing Station (National Archives Bureau Station)</strong>.<br /> 
            ➤ Transfer to Bus 937 or 946, get off at <strong>Dream Mall Station</strong>, walk 8 minutes.<br /> 
            ➤ Transfer to Bus 936 or 945, get off at <strong>Space Wonderland Community Station</strong>, walk 5 minutes.<br /> 
            ➤ Walk 5 minutes to Cultural 2nd Rd. Sec. 1 Post Office Stop, transfer to Bus 920 or 967, get off at <strong>Space Wonderland Community Station</strong>, walk 5 minutes.`;
            document.querySelector('.mrt_area>.table-metro .table-blue>th').innerText = "Taipei Metro";
            document.querySelector('.mrt_area .a10').innerText = "Taipei Metro";
            document.querySelector('.mrt_area .a10_1').innerHTML = `
            ➤ Transfer to Bus 966, get off at <strong>Sports Park Station</strong>, walk 4 minutes.`;
            document.querySelector('.mrt_area .a11').innerText = "Tamsui-Xinyi Line";
            document.querySelector('.mrt_area .a11_1').innerHTML = `
            ➤ Transfer at <strong>Yuanshan Station</strong> to Bus 936, get off at <strong>Space Wonderland Community Station</strong>, walk 5 minutes.`;
            document.querySelector('.mrt_area .a12').innerText = "Zhonghe-Xinlu Line";
            document.querySelector('.mrt_area .a12_1').innerHTML = `
            ➤ Transfer at <strong> Luzhou Station</strong> to Bus 925, get off at <strong>Sports Park Station</strong>, walk 4 minutes.<br /> 
            ➤ Transfer at <strong>Huilong Station</strong> to Bus 898, get off at <strong>Linkou Public Housing Station (National Archives Bureau Station)</strong>.`;
            document.querySelector('.mrt_area>.table-metro .table-yellow>th').innerText = "Circular Line";
            document.querySelector('.mrt_area .y19').innerText = "Xingfu Station (Y19)";
            document.querySelector('.mrt_area .y19_1').innerHTML = `
            ➤ Transfer to Bus 920 at <strong>Xingfu Station (Y19)</strong>, get off at <strong>Space Wonderland Community Station</strong>, walk 5 minutes.`;
            document.querySelector('.short_bus_area .name').innerText = "Bus Stop Name";
            document.querySelector('.short_bus_area .time').innerText = "Walking Time";
            document.querySelector('.short_bus_area .path').innerText = "Bus Routes";
            document.querySelector('.short_bus_area .name_1').innerHTML = "Linkou Public Housing Station<br />(National Archives Bureau Station)";
            document.querySelector('.short_bus_area .time_1').innerText = "3 mins";
            document.querySelector('.short_bus_area .path_1').innerHTML = "822、858、898、5063<br />Jump Frog Bus (Linkou–Fuzhong via Zhongxiao Rd.)";
            document.querySelector('.short_bus_area .name_2').innerText = "Sports Park";
            document.querySelector('.short_bus_area .time_2').innerText = "4 mins";
            document.querySelector('.short_bus_area .path_2').innerHTML = "822、858、898、925、948、966、967<br />F231、F237、F238<br />Jump Frog Bus (Linkou–MRT Zhongxiao Dunhua)";
            document.querySelector('.short_bus_area .name_3').innerText = "Shimao Fanglin Station";
            document.querySelector('.short_bus_area .time_3').innerText = "5 mins";
            document.querySelector('.short_bus_area .path_3').innerText = "786、920、936、945、967";
            document.querySelector('.short_bus_area .name_4').innerHTML = "Sports Park <br /> (Ren'ai Rd.) Station";
            document.querySelector('.short_bus_area .time_4').innerText = "6 mins";
            document.querySelector('.short_bus_area .path_4').innerText = "920、946、967、F237、F238";
            document.querySelector('.short_bus_area .name_5').innerText = "Taipei Sindou Station";
            document.querySelector('.short_bus_area .time_5').innerText = "7 mins";
            document.querySelector('.short_bus_area .path_5').innerHTML = "786、920、946、967、5071、5069<br />F235、F239、F250<br />Jump Frog Bus (Linkou–MRT Zhongxiao Dunhua)";
            document.querySelector('.short_bus_area .name_6').innerText = "Simcity Societies Station";
            document.querySelector('.short_bus_area .time_6').innerText = "8 mins";
            document.querySelector('.short_bus_area .path_6').innerHTML = "854、920、937、946<br />Jump Frog Bus (Linkou–Yuanshan)<br />Jump Frog Bus (Linkou Wenhua 3rd Rd.–Yuanshan)";
            document.querySelectorAll('.drive_area .direction')[0].innerText = "Southbound:";
            document.querySelectorAll('.drive_area .direction')[1].innerText = "Northbound:";
            document.querySelectorAll('.drive_area .path')[0].innerHTML = `
            Take Wenhua 1st Rd. Sec. 1 <strong>→</strong> turn onto Zhongxiao Rd. <strong>→</strong> turn right onto Gongyuan Rd. to reach <strong>NDC (Parking Lot)</strong>`;
            document.querySelectorAll('.drive_area .path')[1].innerHTML = `
                <strong>1.</strong>Take Wenhua 2nd Rd. Sec. 1 <strong>→</strong> turn right onto Archives Rd. to reach the <strong>Main Entrance of NDC</strong>.<br />
                To access the parking lot, continue straight and turn right onto <strong>Wenhua 1st Rd.</strong>, follow the outer road of the park, and enter from <strong>Gongyuan Rd. side</strong>.<br />
                <strong>２.</strong> Take Wenhua 3rd Rd. Sec. 1 <strong>→</strong> turn right onto <strong>Ren'ai 1st Rd.</strong>and go straight <br />
                <strong>→</strong> arrive at <strong>Archives Rd. (Main Entrance).</strong>To access the parking lot, continue straight and turn right onto <strong>Wenhua 1st Rd.</strong>, follow the outer road of the park, and enter from <strong>Gongyuan Rd.</strong> side.`;
            break;
        case "store":
            break;
        case "media":
            break;
    }
}

function checkBtnClass(lang, page) {
    if (lang === 'ch') {
        document.querySelector('.chinese').classList.add('active');
        document.querySelector('.english').classList.remove('active');
        modifyChineseElements(page);
    } else {
        document.querySelector('.chinese').classList.remove('active');
        document.querySelector('.english').classList.add('active');
        modifyEnglishElements(page);
    }
}