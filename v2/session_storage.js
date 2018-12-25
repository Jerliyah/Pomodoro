function save_data() {
    sessionStorage.setItem('::J:: Pomodoro Timer - seconds left', app.seconds_left)
    sessionStorage.setItem('::J:: Pomodoro Timer - is timer running', app.timer_is_running)
}

function delete_data() {
    sessionStorage.removeItem('::J:: Pomodoro Timer - seconds left'),
    sessionStorage.removeItem('::J:: Pomodoro Timer - is timer running')
}

function get_data() {
    return new Promise( (resolve, reject) => {
        if( sessionStorage.getItem('::J:: Pomodoro Timer - seconds left') >= 1 ) {
            resolve( [
                sessionStorage.getItem('::J:: Pomodoro Timer - seconds left'), 
                sessionStorage.getItem('::J:: Pomodoro Timer - is timer running')
            ] )
        }
        else {
            reject()
        }
    })
}