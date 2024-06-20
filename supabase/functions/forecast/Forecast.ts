import { getRandomNumber } from '../_utils/NumberService.ts';
import { celsiusToFahrenheit } from '../_utils/TemperaturService.ts';

const MIN_CLOUDS_MEASURE = 0;
const MAX_CLOUDS_MEASURE = 100;
const MIN_WAVES_MEASURE = 0;
const MAX_WAVES_MEASURE = 100;
const MIN_TEMPERATURE_MEASURE = 17;
const MAX_TEMPERATURE_MEASURE = 34;

export class Forecast {
    public readonly location: { name: string };

    public readonly clouds: number;

    public readonly air_temp_c: number;

    public readonly air_temp_f: number;

    public readonly waves: number;

    constructor(location: string) {
        this.location = { name: location };
        this.clouds = getRandomNumber(MIN_CLOUDS_MEASURE, MAX_CLOUDS_MEASURE);
        this.air_temp_c = getRandomNumber(
            MIN_TEMPERATURE_MEASURE,
            MAX_TEMPERATURE_MEASURE,
        );
        this.air_temp_f = celsiusToFahrenheit(this.air_temp_c);
        this.waves = getRandomNumber(MIN_WAVES_MEASURE, MAX_WAVES_MEASURE);
    }

    toJSON() {
        return {
            location: { name: this.location.name },
            clouds: this.clouds,
            air_temp_c: this.air_temp_c,
            air_temp_f: this.air_temp_f,
            waves: this.waves,
        };
    }
}
