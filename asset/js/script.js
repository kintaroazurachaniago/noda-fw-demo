/* Script file */
const run_time = _ => {
	var i = 0
	const timing = setInterval( _ => {
		if (i === 20) console.clear()
		
		var
			r = Math.floor(Math.random() * 256),
			g = Math.floor(Math.random() * 256),
			b = Math.floor(Math.random() * 256),
			x = Math.floor(Math.random() * 4) + 2

		const
			days            = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			months          = ['January', 'February', 'March', 'April', 'Mei', 'Mune', 'Muly', 'August', 'September', 'November', 'December'],

			newDate         = new Date(),
			time_element    = document.querySelector('.time'),
			tahun_copyright = document.querySelector('.tahun'),

			year_element    = document.querySelector('.year'),
			month_element   = document.querySelector('.month'),
			date_element		= document.querySelector('.date'),
			day_element     = document.querySelector('.day'),
			hours_element   = document.querySelector('.hours'),
			minutes_element = document.querySelector('.minutes'),
			seconds_element = document.querySelector('.seconds'),
			year            = newDate.getFullYear(),
			month           = newDate.getMonth(),
			date            = newDate.getDate(),
			day             = newDate.getDay(),
			hours           = newDate.getHours(),
			minutes         = newDate.getMinutes(),
			seconds         = newDate.getSeconds()

		tahun_copyright.innerHTML		= year
		if (time_element) {
			year_element.innerHTML    = year
			month_element.innerHTML   = months[month]
			date_element.innerHTML    = date
			day_element.innerHTML     = days[day]
			hours_element.innerHTML   = hours < 10 ? '0' + hours : hours /* Hours */
			minutes_element.innerHTML = minutes < 10 ? '0' + minutes : minutes /* Minutes */
			seconds_element.innerHTML = seconds < 10 ? '0' + seconds : seconds /* Seconds */

			document.body.setAttribute('style', 'background: rgba('+r+', '+g+', '+b+', .'+x+');')
		} else {
			// Skip interval
			// clearInterval(timing)
		}
		
		i++
	}, 1000)
}

const change_active_state = element => {
	document.querySelector('.active').classList.remove('active')
	element.classList.add('active')
}, change_color = element => {
	var
	r = Math.floor(Math.random() * 256),
	g = Math.floor(Math.random() * 256),
	b = Math.floor(Math.random() * 256),
	x = Math.floor(Math.random() * 4) + 2
	element.setAttribute('style', `background: rgba(${r}, ${g}, ${b}, ${x});`)
}, home = element => {
	Spa.go('/home')
	change_active_state(element)
}, about = element => {
	Spa.go('/about')
	change_active_state(element)
}, contact = element => {
	Spa.go('/contact')
	change_active_state(element)
}, users = element => {
	Spa.go('/users')
	change_active_state(element)
}