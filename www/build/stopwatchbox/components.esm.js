
var StopWatchComponentComponent = /** @class **/ (function() {
  function StopWatchComponent() {
  }
  StopWatchComponent.is = 'stop-watch';
  StopWatchComponent.getModule = function(opts) {
    
    return import('./stop-watch.js').then(function(m) {
        return m.StopWatchComponent;
      });

  }
});

var StopWatchBoxComponentComponent = /** @class **/ (function() {
  function StopWatchBoxComponent() {
  }
  StopWatchBoxComponent.is = 'stop-watch-box';
  StopWatchBoxComponent.getModule = function(opts) {
    
    return import('./stop-watch.js').then(function(m) {
        return m.StopWatchBoxComponent;
      });

  }
});

export {
  
  StopWatchComponent,
  StopWatchBoxComponent,
};
  