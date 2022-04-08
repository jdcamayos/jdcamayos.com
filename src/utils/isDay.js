export default function isDay() {
	const time = new Date().getHours();
	if (time >= 7 && time < 19) {
		return true;
	} else {
		return false;
	}
}
