export const WEATHER_URL = 'https://api.open-meteo.com/v1/forecast?latitude=-7.1569955&longitude=-78.5174615&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max,sunrise,sunset&forecast_days=7&timezone=America%2FLima';
export function validateWeather(data: any): void {
 const current=data?.current,daily=data?.daily;
 const fields=['temperature_2m','relative_humidity_2m','apparent_temperature','precipitation','weather_code','wind_speed_10m','is_day'];
 const days=['weather_code','temperature_2m_max','temperature_2m_min','precipitation_probability_max','uv_index_max'];
 if(!current||!daily||!fields.every(key=>typeof current[key]==='number'&&Number.isFinite(current[key]))||typeof current.time!=='string'||!Number.isFinite(Date.parse(current.time+'-05:00'))||!Array.isArray(daily.time)||daily.time.length!==7||!daily.time.every((date:unknown)=>typeof date==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(date)&&Number.isFinite(Date.parse(date)))||!days.every(key=>Array.isArray(daily[key])&&daily[key].length===7&&daily[key].every((value:unknown)=>typeof value==='number'&&Number.isFinite(value))))throw Error('Invalid weather payload');
}
