export const dataPanganHewan = (dataPangan = []) => {

    const periode = dataPangan.map((item) => (item.day))
    const data = [...new Set(periode)]
    const jumlah = data.sort((a, b) => a - b);
    // console.log(jumlah);

    // const period = dataPangan.map((item) => (item.meat))
    // const coba = [...new Set(period)]
    // console.log(coba);

    const month = dataPangan.filter((item, index) => (item.month && index <= 30))
    // const monthdata = dataPangan.map((item) => (item.month))
    // const SINGA = month.map((item) => ({ meat: item.meat, day: item.day }))
    const dataMonth = month.map((item) => (item.month));
    console.log(dataMonth);

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
            // inverted: true,
            zoomType: "xy"
        },
        title: {
            text: 'Test Results'
        },
        xAxis: {
            categories: [...jumlah],
            max: 31
        },
        yAxis: {
            min: 0,
            max: 150,
            title: {
                text: 'Meat Comsumption (Kg)'
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
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
            data: [...filterBeruang.map((item) => Math.floor(item.meat))]
        }, {
            name: 'SERIGALA',
            data: [...filterSerigala.map((item) => Math.floor(item.meat))]
        }, {
            name: 'BUAYA',
            data: [...filterBuaya.map((item) => Math.floor(item.meat))]
        },
        {
            name: 'SINGA',
            data: [...filterSinga.map((item) => Math.floor(item.meat))]
        },
        {
            name: 'MACAN',
            data: [...filterMacan.map((item) => Math.floor(item.meat))]
        },
        {
            name: 'ULAR',
            data: [...filterUlar.map((item) => Math.floor(item.meat))]
        },
        {
            name: 'LAINNYA',
            data: [...filterLainnya.map((item) => Math.floor(item.meat))]
        }]
    }

    return chartOptions
}