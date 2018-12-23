
Vue.component('alert-box', {
    data: function() {
        return {
            test2: "::J:: alerts are here"
        }

    },

    template: `
        <section id="alert-box" class="active" aria-label="alert box">
            <p class="alert" role="alert">
                {{test2}}
            </p>
        </section>
    `
})

    

    
    
    
const app = new Vue({
    el: '#js-fail-message',

    data: {
        test1: "::J:: Vue is here",

        virtual_timer: null,
        seconds_left: (25 * 60),
        timer_is_running: false

    },

    methods: {
        countdown: function() {
            this.seconds_left -= 1

            console.log('::J::  seconds left: ', this.seconds_left)
        },

        start_timer: function() {
            this.timer = setInterval( () => {
                this.countdown()
            }, 1000 )
            this.timer_is_running = true
            console.log('::J::  Timer started')
        },

        pause_timer: function() {
            clearInterval( this.timer )
            this.timer_is_running = false
            console.log('::J::  Timer paused')
        },

        reset_timer: function() {
            clearInterval(this.timer)
            this.timer = null
            this.seconds_left = (25 * 60)
            this.timer_is_running = false
            console.log('::J::  Timer reset')
        }
    },

    computed: {

    },

    template: `
        <div id="page">
            <header>
                <h1>Pomodoro</h1>
                <alert-box />
            </header>

            <main>
                <section id="timer" aria-label="timer">
                    <span id="minutes" aria-label="minutes">25</span>
                    <span id="separator">:</span>
                    <span id="seconds" aria-label="seconds">00</span>
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

