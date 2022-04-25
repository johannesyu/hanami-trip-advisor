async function drawChart(container){
   

   //fetch and store the data 
   var response = await fetch('https://raw.githubusercontent.com/johannesyu/hanami-trip-advisor/main/data/japan-topojson.json')
	var country = await response.json()

   response = await fetch('https://raw.githubusercontent.com/johannesyu/hanami-trip-advisor/main/data/overview - 1.csv')
	var csvString = await response.text()       

   //parse csv
   const parser = d3.dsvFormat(',')
   
   var hanamiSpots = parser.parse(csvString, d => ({
      id: d.location_id,
      name: d.name,
      review_count: d.review_count,
      rate: d.rate,
      city: d.city,
      region_jp: d.region_jp,
      region_en: d.region_en,
      address: d.address,
      lat: +d.latitude,
      long: +d.longitude,
      href: d.href,
      setting: d.surrounding,
      attr: d.attraction,
      }))
      
   console.log(hanamiSpots)

}


