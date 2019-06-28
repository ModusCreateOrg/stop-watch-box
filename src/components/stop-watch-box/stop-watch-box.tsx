import { h, Component, State, Prop } from "@stencil/core";
import { WatchService } from "../../services/watch-service";

@Component({
  tag: "stop-watch-box",
  styleUrl: "stop-watch-box.css"
})
export class StopWatchBoxComponent {
  private hh = 0;
  private mm = 0;
  private ss = 0;
  private ms = 0;
  @State() hours = '00';
  @State() minutes= '00';
  @State() seconds= '00';
  @State() milliseconds= '00';
  @Prop() applyHover: boolean = false;
  timer: any = null;
  @State() isTimerRunning = false;
  watchService = new WatchService();
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
    return (
      <div class="watch-box">
        <div class="watch-container">
          <stop-watch apply-hover={this.applyHover} hours={this.hours} minutes={this.minutes} seconds={this.seconds} milliseconds={this.milliseconds}></stop-watch>
        </div>
        <div class="actions-container">
          <button onClick={ () => this.start()} disabled={this.isTimerRunning}>Start</button>
          <button onClick={ () => this.stop()} disabled={!this.isTimerRunning}>Stop</button>
          <button onClick={ () => this.clear()} disabled={this.isTimerRunning}>Clear</button>
        </div>
      </div>
    );
  }
}
