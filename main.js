
Vue.component('alert-box', {
    props: {
        transmission: String
    },
    
    data: function() {
        return {
            test2: "::J:: alerts are here"
        }

    },

    template: `
        <section id="alert-box" class="active" aria-label="alert box">
            <p class="alert" role="alert">
                {{ transmission }}
            </p>
        </section>
    `
})

    

    
    
    
const app = new Vue({
    el: '#js-fail-message',

    data: {
        virtual_timer: null,
        seconds_left: (25 * 60),
        timer_is_running: false,
        alert_message: ''
    },

    mounted: function() {
        get_data()
            .then( (data) => {
                console.log('::J:: retrieved', data)
                if( data ) {
                    // ::J:: The data is returned as an array of strings
                    this.seconds_left =  parseInt( data[0] )
                    timer_is_running = data[1]

                    if( timer_is_running === 'true') {
                        this.start_timer()
                    }
                }
        })
    },

    methods: {
        countdown: function() {
            if( this.seconds_left >= 0 ) {
                this.seconds_left -= 1
                this.alert_engine(this.seconds_left)
            }
            else {
                this.reset_timer()
            }

            if( save_data ) { save_data() }
        },

        start_timer: function() {
            this.timer = setInterval( () => this.countdown(), 1000 )
            this.timer_is_running = true
            console.log('::J::  Timer started')

            
        },

        pause_timer: function() {
            clearInterval( this.timer )
            this.timer_is_running = false
            console.log('::J::  Timer paused')

            if( save_data ) { save_data() }
        },

        reset_timer: function() {
            clearInterval(this.timer)
            this.timer = null
            this.seconds_left = (25 * 60)
            this.timer_is_running = false

            if( delete_data ) { delete_data() }
            console.log('::J::  Timer reset')
        },

        alert_engine(seconds_left) {
            if( this.seconds_left === ((25 * 60) - 1) ) {
                this.alert_message = "time to work"
            }
            if( this.seconds_left === (15 * 60) ) {
                this.alert_message = "half way there"
            }
            if( this.seconds_left <= 1 ) {
                this.alert_message =" break time"
            }

            setTimeout( () => this.alert_message = '', 3000)
            console.log("::J::", this.seconds_left, this.alert_message)
        },

        time_padding(integer) {
            if( integer < 10) {
                return '0' + integer
            }
            else {
                return integer
            }
        }
    },

    computed: {
        minutes: function() {
            return this.time_padding( Math.floor( this.seconds_left / 60) )
        },
        seconds: function() {
            return this.time_padding( this.seconds_left - (this.minutes * 60) )
        }
    },

    template: `
        <div id="page">
            <header>
                <h1>Pomodoro</h1>
                <alert-box 
                    :transmission="alert_message"
                    v-if="alert_message"/>
            </header>

            <main>
                <section id="timer" aria-label="timer">
                    <span id="minutes" aria-label="minutes">{{minutes}}</span>
                    <span id="separator">:</span>
                    <span id="seconds" aria-label="seconds">{{seconds}}</span>
                    <!-- <span class="tester">{{ test1 }}</span> -->
                </section>

                <section id="controls" aria-label="controls">
                    <button id="start" 
                            title="start" 
                            aria-label="commence countdown"
                            v-if="!timer_is_running"
                            @click="start_timer">
                            <i class="fas fa-play-circle" role="presentation"></i>
                            
                    </button>

                    <button id="pause" 
                            title="stop" 
                            aria-label="pause countdown"
                            v-if="timer_is_running"
                            @click="pause_timer">
                            <i class="fas fa-pause-circle" role="presentation"></i>
                    </button>

                    <button id="reset" 
                            title="reset" 
                            aria-label="reset countdown"
                            v-if="timer_is_running"
                            @click="reset_timer">
                            <i class="fas fa-undo-alt" role="presentation"></i>
                    </button>
                </section>
            </main>
        </div>
    `
})

