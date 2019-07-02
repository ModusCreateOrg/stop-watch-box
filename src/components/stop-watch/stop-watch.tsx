import { h, Component, Prop } from "@stencil/core";

@Component({
  tag: "stop-watch",
  styleUrl: "stop-watch.css"
})
export class StopWatchComponent {
  @Prop() hours: string;
  @Prop() minutes: string;
  @Prop() seconds: string;
  @Prop() milliseconds: string;
  @Prop() applyHover: boolean = false;

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
    const x = e.pageX - e.target.offsetLeft
    const y = e.pageY - e.target.offsetTop
    e.target.style.setProperty('--x', `${ x }px`)
    e.target.style.setProperty('--y', `${ y }px`)
  }

  render() {
    return (
      <div class={this.applyHover ? 'watch-wrapper apply-hover' : 'watch-wrapper'} onMouseMove={(event) => {this.onMouseMove(event)}}>
        <div class="watch">
          <div class="unit">{this.hours}</div>
          <div class="sep"> : </div>
          <div class="unit">{this.minutes}</div>
          <div class="sep"> : </div>
          <div class="unit">{this.seconds}</div>
          <div class="sep"> : </div>
          <div class="unit">{this.milliseconds}</div>
        </div>
      </div>
    );
  }
}
