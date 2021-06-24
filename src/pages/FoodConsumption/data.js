export const dataPanganHewan = (dataPangan = []) => {

    const periode = dataPangan.map((item) => (item.day))
    const data = [...new Set(periode)]
    const jumlah = data.sort((a, b) => (a - b));
    const dataMonth = jumlah.map((item) => (`${item}/3`));


    const filterBuaya = dataPangan.filter(item => item.animal === "BUAYA" && item.day);
    const filterMacan = dataPangan.filter(item => item.animal === "MACAN" && item.day);
    const filterUlar = dataPangan.filter(item => item.animal === "ULAR" && item.day);
    const filterLainnya = dataPangan.filter(item => item.animal === "LAINNYA" && item.day);
    const filterSinga = dataPangan.filter(item => item.animal === "SINGA" && item.day);
    const filterBeruang = dataPangan.filter(item => item.animal === "BERUANG" && item.day);
    const filterSerigala = dataPangan.filter(item => item.animal === "SERIGALA" && item.day);


    const chartOptions = {
        chart: {
            type: 'column',
            renderTo: 'container',
            zoomType: "xy"
        },
        title: {
            // text: 'Test Results'
        },
        xAxis: [
            {
                categories: [...dataMonth],
                max: 14,
            }],
        yAxis: {
            min: 0,
            max: 150,
            title: {
                text: 'Meat Comsumption (Kg)'
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name} </span>: <b>{point.y}</b><br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'percent'
            }
        },
        series: [
            {
                data: []
            }
        ]
    }


    if (dataPangan.length !== 0) {
        chartOptions.series = [{
            name: 'BERUANG',
            data: [...filterBeruang.map((item) => Math.floor(item.meat.toFixed(0)))]
        }, {
            name: 'SERIGALA',
            data: [...filterSerigala.map((item) => Math.floor(item.meat.toFixed(0)))]
        }, {
            name: 'BUAYA',
            data: [...filterBuaya.map((item) => Math.floor(item.meat.toFixed(0)))]
        },
        {
            name: 'SINGA',
            data: [...filterSinga.map((item) => Math.floor(item.meat.toFixed(0)))]
        },
        {
            name: 'MACAN',
            data: [...filterMacan.map((item) => Math.floor(item.meat.toFixed(0)))]
        },
        {
            name: 'ULAR',
            data: [...filterUlar.map((item) => Math.floor(item.meat.toFixed(0)))]
        },
        {
            name: 'LAINNYA',
            data: [...filterLainnya.map((item) => Math.floor(item.meat.toFixed(0)))]
        }]
    }

    return chartOptions
}