/*! Built with http://stenciljs.com */
const { h } = window.stopwatchbox;

class StopWatchComponent {
    constructor() {
        this.applyHover = false;
    }
    /**
     * @author Ahsan Ayaz
     * @desc this method adds some attributes to the .watch-wrapper element
     * This is just for some stunning hover effects that I really loved from this article
     * on css variables and their usage:
     * https://blog.prototypr.io/stunning-hover-effects-with-css-variables-f855e7b95330
     */
    onMouseMove(e) {
        if (!this.applyHover || e.target.className.indexOf('watch-wrapper') === -1) {
            return;
        }
        const x = e.pageX - e.target.offsetLeft;
        const y = e.pageY - e.target.offsetTop;
        e.target.style.setProperty('--x', `${x}px`);
        e.target.style.setProperty('--y', `${y}px`);
    }
    render() {
        return (h("div", { class: this.applyHover ? 'watch-wrapper apply-hover' : 'watch-wrapper', onMouseMove: (event) => { this.onMouseMove(event); } },
            h("div", { class: "watch" },
                h("div", { class: "unit" }, this.hours),
                h("div", { class: "sep" }, " : "),
                h("div", { class: "unit" }, this.minutes),
                h("div", { class: "sep" }, " : "),
                h("div", { class: "unit" }, this.seconds),
                h("div", { class: "sep" }, " : "),
                h("div", { class: "unit" }, this.milliseconds))));
    }
    static get is() { return "stop-watch"; }
    static get properties() { return {
        "applyHover": {
            "type": Boolean,
            "attr": "apply-hover"
        },
        "hours": {
            "type": String,
            "attr": "hours"
        },
        "milliseconds": {
            "type": String,
            "attr": "milliseconds"
        },
        "minutes": {
            "type": String,
            "attr": "minutes"
        },
        "seconds": {
            "type": String,
            "attr": "seconds"
        }
    }; }
    static get style() { return ".watch-wrapper {\n  background: #2196F3;\n  padding: 20px;\n  display: block;\n  font-family: monospace;\n  -webkit-box-shadow: 0 16px 16px 0 rgba(0,0,0,0.1);\n  box-shadow: 0 16px 16px 0 rgba(0,0,0,0.1);\n}\n\n.watch{\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: space-evenly;\n  -webkit-justify-content: space-evenly;\n  -ms-flex-pack: space-evenly;\n  justify-content: space-evenly;\n  z-index: 2;\n}\n\n.watch .unit, .watch .sep{\n  font-size: 32px;\n  color: #FFEB3B;\n}\n\n\n/*\n\n  STUNNING HOVER EFFECTS\n  Took from this GREAT article:\n  https://blog.prototypr.io/stunning-hover-effects-with-css-variables-f855e7b95330\n*/\n\n.watch-wrapper.apply-hover {\n  position: relative;\n  outline: none;\n  overflow: hidden;\n}\n\n.watch-wrapper.apply-hover::before {\n  --size: 0;\n  content: '';\n  position: absolute;\n  left: var(--x);\n  top: var(--y);\n  width: var(--size);\n  height: var(--size);\n  background: radial-gradient(circle closest-side, #fef101, transparent);\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  -webkit-transition: width .2s ease, height .2s ease;\n  transition: width .2s ease, height .2s ease;\n}\n\n.watch-wrapper.apply-hover:hover::before {\n  --size: 400px;\n}"; }
}

class WatchService {
    /**
     * @author Ahsan Ayaz
     * @desc Calculates the units and sets in string format.
     * @param unit value of the unit in numbers
     * @return {string} the string representation of the unit's value with at least 2 digits
     */
    getTimeString(unit) {
        return (unit ? (unit > 9 ? unit : "0" + unit) : "00").toString();
    }
}

class StopWatchBoxComponent {
    constructor() {
        this.hh = 0;
        this.mm = 0;
        this.ss = 0;
        this.ms = 0;
        this.hours = '00';
        this.minutes = '00';
        this.seconds = '00';
        this.milliseconds = '00';
        this.applyHover = false;
        this.timer = null;
        this.isTimerRunning = false;
        this.watchService = new WatchService();
    }
    /**
     * @author Ahsan Ayaz
     * @desc Starts the timer, updates ever 10 milliseconds
     */
    start() {
        this.isTimerRunning = true;
        this.timer = setInterval(() => {
            this.updateTime();
        }, 10);
    }
    /**
     * @author Ahsan Ayaz
     * @desc Updates the value of the units in for the watchf
     */
    updateTime() {
        this.ms++;
        if (this.ms >= 100) {
            this.ms = 0;
            this.ss++;
            if (this.ss >= 60) {
                this.ss = 0;
                this.mm++;
                if (this.mm >= 60) {
                    this.mm = 0;
                    this.hh++;
                }
            }
        }
        this.setTime();
    }
    /**
     * @author Ahsan Ayaz
     * @desc Updates the time for the watch component.
     * Applies the detected changes.
     */
    setTime() {
        this.hours = this.watchService.getTimeString(this.hh);
        this.minutes = this.watchService.getTimeString(this.mm);
        this.seconds = this.watchService.getTimeString(this.ss);
        this.milliseconds = this.watchService.getTimeString(this.ms);
    }
    /**
     * @author Ahsan Ayaz
     * @desc Stops the watch.
     */
    stop() {
        this.isTimerRunning = false;
        clearInterval(this.timer);
    }
    /**
     * @author Ahsan Ayaz
     * @desc Clears the time of the watch.
     */
    clear() {
        this.hh = 0;
        this.mm = 0;
        this.ss = 0;
        this.ms = 0;
        this.setTime();
    }
    render() {
        return (h("div", { class: "watch-box" },
            h("div", { class: "watch-container" },
                h("stop-watch", { "apply-hover": this.applyHover, hours: this.hours, minutes: this.minutes, seconds: this.seconds, milliseconds: this.milliseconds })),
            h("div", { class: "actions-container" },
                h("button", { onClick: () => this.start(), disabled: this.isTimerRunning }, "Start"),
                h("button", { onClick: () => this.stop(), disabled: !this.isTimerRunning }, "Stop"),
                h("button", { onClick: () => this.clear(), disabled: this.isTimerRunning }, "Clear"))));
    }
    static get is() { return "stop-watch-box"; }
    static get properties() { return {
        "applyHover": {
            "type": Boolean,
            "attr": "apply-hover"
        },
        "hours": {
            "state": true
        },
        "isTimerRunning": {
            "state": true
        },
        "milliseconds": {
            "state": true
        },
        "minutes": {
            "state": true
        },
        "seconds": {
            "state": true
        }
    }; }
    static get style() { return ".watch-box {\n  display: block;\n  height: 300px;\n  width: 300px;\n  margin: 0 auto;\n  padding-top: 20px;\n}\n\n.watch-box .watch-container {\n  padding: 20px;\n  font-family: system-ui;\n}\n\n.watch-box .actions-container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: space-evenly;\n  -webkit-justify-content: space-evenly;\n  -ms-flex-pack: space-evenly;\n  justify-content: space-evenly;\n}\n\n.watch-box .actions-container button {\n  border-width: 0;\n  padding: 10px;\n  outline: none;\n  border-radius: 2px;\n  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, .6);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, .6);\n  background-color: #333;\n  color: #ecf0f1;\n  cursor: pointer;\n}\n\n.watch-box .actions-container button:hover {\n  background-color: #555;\n}\n\n.watch-box .actions-container button[disabled] {\n  background-color: #dcdcdc;\n  color: black;\n  opacity: 0.3;\n  cursor: not-allowed;\n}"; }
}

export { StopWatchComponent as StopWatch, StopWatchBoxComponent as StopWatchBox };
